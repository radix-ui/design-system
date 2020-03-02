import React from 'react';
import { Avatar as AvatarPrimitive, AvatarProps as AvatarPrimitiveProps } from '@modulz/primitives';
import { theme } from '../theme';

export type AvatarProps = AvatarPrimitiveProps;

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, forwardedRef) => (
  <AvatarPrimitive
    {...props}
    ref={forwardedRef}
    styleConfig={{
      base: {
        avatar: {
          normal: {
            width: theme.sizes[5],
            height: theme.sizes[5],
            borderRadius: '100%',
            backgroundColor: theme.colors.gray300,
            color: theme.colors.gray800,
            fontFamily: theme.fonts.normal,
            fontSize: theme.fontSizes[1],
            fontWeight: 500,
            lineHeight: theme.lineHeights[2],
            textTransform: 'uppercase',
          },
        },
      },
    }}
  />
));
