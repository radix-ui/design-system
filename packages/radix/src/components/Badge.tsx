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

export const Badge = (props: BadgeProps) => (
  <BadgePrimitive
    {...props}
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
            borderColor: 'grays.3',
            color: 'grays.5',
          },
          blue: {
            borderColor: 'blues.3',
            color: 'blues.5',
          },
          green: {
            borderColor: 'greens.3',
            color: 'greens.5',
          },
          red: {
            borderColor: 'reds.3',
            color: 'reds.5',
          },
          yellow: {
            borderColor: 'yellows.3',
            color: 'yellows.5',
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

Badge.defaultProps = {
  variant: 'gray',
  size: 0,
};
