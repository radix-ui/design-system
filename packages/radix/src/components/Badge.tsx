import React from 'react';
import css from '@styled-system/css';
import themeGet from '@styled-system/theme-get';
import { variant, Prop } from '@modulz/radix-system';
import { Badge as BadgePrimitive, BadgeProps as BadgePrimitiveProps } from 'mdlz-prmtz';
import { withTheme } from 'styled-components';

type Variants = 'gray' | 'blue' | 'green' | 'red' | 'yellow';
type Sizes = 0 | 1;

type BadgeProps = BadgePrimitiveProps & {
  variant?: Prop<Variants>;
  size?: Prop<Sizes>;
  children?: React.ReactNode;
  as?: any;
  // TODO: type Theme
  theme?: any;
};

export const BaseBadge = React.forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  return (
    <BadgePrimitive
      {...props}
      ref={ref}
      css={[
        css({
          fontFamily: 'mono',
          fontSize: 0,
          height: 3, // TODO: Remove `inline-flex` from Primitives and then we can make this `inline-block` and remove height
          minWidth: 5,
          paddingY: 0,
          paddingX: '1.25ch',
          lineHeight: 0,
          textTransform: 'none', // TODO: Remove from Primitives
          letterSpacing: 0, // TODO: Remove from Primitives
          border: 0,
          wordSpacing: '-0.25em',
        }),
        variant({
          variant: {
            gray: {
              boxShadow: `inset 0 0 0 1px ${themeGet('colors.gray300')(props)}`,
              color: 'gray800',
            },
            blue: {
              backgroundColor: 'blue100',
              boxShadow: `inset 0 0 0 1px ${themeGet('colors.blue300')(props)}`,
              color: 'blue700',
            },
            green: {
              backgroundColor: 'green100',
              boxShadow: `inset 0 0 0 1px ${themeGet('colors.green300')(props)}`,
              color: 'green700',
            },
            red: {
              backgroundColor: 'red100',
              boxShadow: `inset 0 0 0 1px ${themeGet('colors.red300')(props)}`,
              color: 'red700',
            },
            yellow: {
              backgroundColor: 'yellow100',
              boxShadow: `inset 0 0 0 1px ${themeGet('colors.yellow300')(props)}`,
              color: 'yellow700',
            },
          },
        }),
      ]}
    />
  );
});

BaseBadge.defaultProps = {
  variant: 'gray',
};

export const Badge = withTheme(BaseBadge);
