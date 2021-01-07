import { styled, StitchesProps, utils, theme } from '../stitches.config';
import { flexGapSupported } from './flexGapSupported';
import * as React from 'react';

/** A lot of casting is happening in this fine which should
 * be fixed once the next version of stitches is in with the new types */

export type FlexProps = StitchesProps<typeof _Flex>;
// Base flex that will be used
// when gap is supported
const _Flex = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
});

// https://pbs.twimg.com/media/EcrZhh8XYAEU_-M?format=jpg&name=small
// but for real. this will be fixed in the new stitches
const resolveUtils = (css: any, resolved: any = {}): any => {
  for (const key in css) {
    const value = css[key];
    if (key in utils) {
      Object.assign(resolved, (utils as any)[key](value, { tokens: theme, utils }));
    } else if (typeof value === 'object' && value) {
      resolved[key] = resolved[key] || {};
      Object.assign(resolved[key], resolveUtils(value));
    } else {
      resolved[key] = value;
    }
  }
  return resolved;
};

// Old stitches types are bad so we're just casting until we start using the new fancy version
type Props = { css?: any; style?: React.CSSProperties & { [a: string]: string } };

export const Flex = (React.forwardRef<HTMLDivElement, Props>(
  ({ css, children, style, ...props }, ref): JSX.Element => {
    const [shouldPolyfill, setShouldPolyfill] = React.useState(false);
    // make sure that the the shorthand utils are resolved into
    // real css properties so that the polyfill is able to detect
    // and redirect them to the correct area
    const rCss = resolveUtils(css || {});
    const [gap, columnGap, rowGap]: any[] = [
      style?.gap || rCss.gap,
      style?.columnGap || rCss.columnGap,
      style?.rowGap || rCss.rowGap,
    ];

    // when flexGap is not supported force a re-render to render the polyfill
    // done this way to avoid defaulting to the polyfill on the server
    // so with this approach, the polyfill will be triggered on the client
    // only for browsers that don't support it
    React.useEffect(() => {
      if (!flexGapSupported() && !!(gap || rowGap || columnGap)) {
        // flex gap isn't supported
        setShouldPolyfill(true);
      } else {
        setShouldPolyfill(false);
      }
    }, [!flexGapSupported(), gap, rowGap, columnGap]);

    // Gap not supported & gap is used:
    if (shouldPolyfill) {
      const {
        display: inlineDisplay,
        flexDirection: inlineFlexDirection,
        flexWrap: inlineFlexWrap,
        flexFlow: inlineFlexFlow,
        justifyContent: inlineJustifyContent,
        alignItems: inlineAlignItems,
        alignContent: inlineAlignContent,
        ...restOfInlineStyles
      } = style || {};
      const {
        display,
        flexDirection,
        flexWrap,
        flexFlow,
        justifyContent,
        alignItems,
        alignContent,
        ...restOfStyles
      } = rCss;
      return (
        /** Everything goes to the wrapper */
        <_Flex
          ref={ref}
          style={restOfInlineStyles}
          css={{
            ...restOfStyles,
          }}
          {...props}
        >
          {/** Except flex related stuff */}
          <_Flex
            // we're cleaning up any undefined values
            // because we've had issues when flexFlow was set to undefined
            // as it was causing react to reconcile it in a very weird way
            // by ignoring some of its properties
            style={
              Object.entries({
                display: inlineDisplay,
                flexDirection: inlineFlexDirection,
                flexFlow: inlineFlexFlow,
                justifyContent: inlineJustifyContent,
                alignItems: inlineAlignItems,
                alignContent: alignContent,
                //* stitches has a bug when trying to set custom properties as it mistakes them for vendor prefixed properties
                '--gap': gap ? (theme as any).space[gap] || gap : '0px',
                // prettier-ignore
                '--column-gap': columnGap ? (theme as any).space[columnGap] || columnGap : 'var(--gap)',
                // prettier-ignore
                '--row-gap': rowGap ? (theme as any).space[rowGap] || rowGap : 'var(--gap)',
              }).reduce<Record<string, string>>((acc, curr) => {
                if (curr[1] !== undefined) {
                  acc[curr[0]] = curr[1];
                }
                return acc;
              }, {}) as React.CSSProperties
            }
            css={{
              flexWrap,
              flexFlow,
              justifyContent,
              alignItems,
              alignContent,
              flexDirection,
              // && for Injection oooordeeerrr
              // since atomic stitches has issues with guaranteeing the order of injection
              '&& > *': {
                margin: 'calc(var(--row-gap) / 2) calc(var(--column-gap) / 2)',
              },
              // negative margin on the container to accommodate for margin added on the sides by the children
              margin: 'calc(var(--row-gap) / -2) calc(var(--column-gap) / -2)',
              // fix the container size
              width: 'calc(100%  + var(--column-gap))',
              height: 'calc(100% + calc(var(--row-gap) / 2 ))',
            }}
          >
            {children}
          </_Flex>
        </_Flex>
      );
    }
    // Gap is supported or no gap is used
    return <_Flex {...props} children={children} css={css} style={style} ref={ref} />;
  }
) as any) as typeof _Flex;
