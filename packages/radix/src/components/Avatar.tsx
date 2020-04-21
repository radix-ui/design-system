import React from 'react';
import { Avatar as AvatarPrimitive, AvatarProps as AvatarPrimitiveProps } from '@modulz/primitives';
import { theme } from '../theme';

type Variant = 'gray' | 'black';
type Size = 0 | 1;

export type AvatarProps = AvatarPrimitiveProps & {
  variant?: Variant;
  size?: Size;
};

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>((props, forwardedRef) => (
  <AvatarPrimitive
    {...props}
    ref={forwardedRef}
    styleConfig={{
      base: {
        avatar: {
          normal: {
            borderRadius: '100%',
            color: 'white',
            fontFamily: theme.fonts.normal,
            fontWeight: 500,
            textTransform: 'uppercase',
          },
        },
      },
      variants: {
        variant: {
          gray: {
            avatar: {
              normal: {
                backgroundImage: `linear-gradient(${theme.colors.gray600}, ${theme.colors.gray700})`,
              },
            },
          },
          black: {
            avatar: {
              normal: {
                backgroundColor: theme.colors.gray800,
              },
            },
          },
        },
        size: {
          0: {
            avatar: {
              normal: {
                fontSize: theme.fontSizes[2],
                lineHeight: theme.lineHeights[2],
                width: theme.sizes[5],
                height: theme.sizes[5],
              },
            },
          },
          1: {
            avatar: {
              normal: {
                fontSize: theme.fontSizes[5],
                lineHeight: theme.lineHeights[4],
                width: theme.sizes[6],
                height: theme.sizes[6],
              },
            },
          },
        },
      },
    }}
  />
));

Avatar.defaultProps = {
  variant: 'gray',
  size: 0,
};
