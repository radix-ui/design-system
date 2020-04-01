import React from 'react';
import { Avatar as AvatarPrimitive, AvatarProps as AvatarPrimitiveProps } from '@modulz/primitives';
import { theme } from '../theme';

type Size = 0 | 1;

export type AvatarProps = AvatarPrimitiveProps & {
  size?: Size;
};

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, forwardedRef) => (
  <AvatarPrimitive
    {...props}
    ref={forwardedRef}
    styleConfig={{
      base: {
        avatar: {
          normal: {
            borderRadius: '100%',
            backgroundColor: theme.colors.gray300,
            color: theme.colors.gray800,
            fontFamily: theme.fonts.normal,
            fontWeight: 500,
            textTransform: 'uppercase',
          },
        },
      },
      variants: {
        size: {
          0: {
            avatar: {
              normal: {
                fontSize: theme.fontSizes[1],
                lineHeight: theme.lineHeights[2],
                width: theme.sizes[5],
                height: theme.sizes[5],
              },
            },
          },
          1: {
            avatar: {
              normal: {
                fontSize: theme.fontSizes[3],
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
  size: 0,
};
