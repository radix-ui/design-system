import { styled, config } from '../stitches.config';
import { flexGapSupported } from './flexGapSupported';
import * as React from 'react';

// Base flex that will be used
// when gap is supported
const _Flex = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
});

type Theme = typeof config.theme;

/**
 * Resolve a token in inside a given scale or returns undefined if it does not exist.
 * NOTE: Might produce wrong results if the implementation in stitches changes
 */
const resolveTokenInTheme = <T extends keyof Theme>(scale: T, token: keyof Theme[T]) =>
  (token as string)[0] === '$'
    ? (config.theme[scale] as Record<any, any>)[(token as string).substr(1)]
    : undefined;

/**
 * Resolve the the utils in a stitches css object so that things like jc turn into justifyContent
 * NOTE: Might produce wrong results if the implementation in stitches changes
 */
const resolveUtils = (css: any, resolved: any = {}): any => {
  for (const key in css) {
    const value = css[key];
    if (key in config.utils) {
      Object.assign(resolved, (config.utils as any)[key](config)(value));
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
                '--gap': gap ? resolveTokenInTheme('space', gap) || gap : '0px',
                // prettier-ignore
                '--column-gap': columnGap ? resolveTokenInTheme( 'space', columnGap) || columnGap : 'var(--gap)',
                // prettier-ignore
                '--row-gap': rowGap ? resolveTokenInTheme('space', rowGap) || rowGap : 'var(--gap)',
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
              // make sure we're producing a selector more specific than children's own class
              // so that the margin below wins over the child's margin
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
