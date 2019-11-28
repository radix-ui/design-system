import React from 'react';
import css from '@styled-system/css';
import { variant, Prop } from '@modulz/radix-system';
import { Badge as BadgePrimitive, BadgeProps as BadgePrimitiveProps } from 'mdlz-prmtz';

type Variants = 'gray' | 'blue' | 'green' | 'red' | 'yellow';
type Sizes = 0 | 1;

type BadgeProps = BadgePrimitiveProps & {
  variant?: Prop<Variants>;
  size?: Prop<Sizes>;
  children?: React.ReactNode;
  as?: any;
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  return (
    <BadgePrimitive
      {...props}
      ref={ref}
      css={[
        css({
          fontFamily: 'medium',
          fontWeight: 500,
          letterSpacing: '.134em',
          padding: 0,
          textIndent: '.134em',
          textTransform: 'uppercase',
        }),
        variant({
          variant: {
            gray: {
              borderColor: 'gray400',
              color: 'gray600',
            },
            blue: {
              borderColor: 'blue400',
              color: 'blue600',
            },
            green: {
              borderColor: 'green400',
              color: 'green600',
            },
            red: {
              borderColor: 'red400',
              color: 'red600',
            },
            yellow: {
              borderColor: 'yellow400',
              color: 'yellow600',
            },
          },
        }),
        variant({
          size: {
            0: {
              fontSize: 0,
              height: 3,
              minWidth: 5,
              paddingX: 2,
            },
            1: {
              fontSize: 1,
              height: 5,
              minWidth: 6,
              paddingX: 3,
            },
          },
        }),
      ]}
    />
  );
});

Badge.defaultProps = {
  variant: 'gray',
  size: 0,
};
