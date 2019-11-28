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
          fontFamily: 'normal',
          fontWeight: 500,
          letterSpacing: '.134em',
          padding: 0,
          textIndent: '.134em',
          textTransform: 'uppercase',
        }),
        variant({
          variant: {
            gray: {
              borderColor: 'gray300',
              color: 'gray800',
            },
            blue: {
              backgroundColor: 'blue100',
              borderColor: 'blue300',
              color: 'blue700',
            },
            green: {
              backgroundColor: 'green100',
              borderColor: 'green300',
              color: 'green700',
            },
            red: {
              backgroundColor: 'red100',
              borderColor: 'red300',
              color: 'red700',
            },
            yellow: {
              backgroundColor: 'yellow100',
              borderColor: 'yellow300',
              color: 'yellow700',
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
