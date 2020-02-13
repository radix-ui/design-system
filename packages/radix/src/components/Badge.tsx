import React from 'react';
import { Badge as BadgePrimitive, BadgeProps as BadgePrimitiveProps } from '@modulz/primitives';
import { theme } from '../theme';

type Variant = 'gray' | 'blue' | 'green' | 'red' | 'yellow';
type Size = 0 | 1;

export type BadgeProps = BadgePrimitiveProps & {
  variant?: Variant;
  size?: Size;
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>((props, forwardedRef) => {
  return (
    <BadgePrimitive
      {...props}
      ref={forwardedRef}
      styleConfig={{
        base: {
          badge: {
            normal: {
              fontFamily: theme.fonts.mono,
              fontSize: theme.fontSizes[0],
              lineHeight: theme.lineHeights[0],
              wordSpacing: '-0.25em',
              minWidth: theme.sizes[5],
              paddingTop: 0,
              paddingBottom: 0,
              paddingLeft: '1.25ch',
              paddingRight: '1.25ch',
              border: 0,
              borderRadius: 9999,
            },
          },
        },
        variants: {
          variant: {
            gray: {
              badge: {
                normal: {
                  boxShadow: `inset 0 0 0 1px ${theme.colors.gray300}`,
                  color: theme.colors.gray800,
                },
              },
            },
            blue: {
              badge: {
                normal: {
                  backgroundColor: theme.colors.blue100,
                  boxShadow: `inset 0 0 0 1px ${theme.colors.blue300}`,
                  color: theme.colors.blue700,
                },
              },
            },
            green: {
              badge: {
                normal: {
                  backgroundColor: theme.colors.green100,
                  boxShadow: `inset 0 0 0 1px ${theme.colors.green300}`,
                  color: theme.colors.green700,
                },
              },
            },
            red: {
              badge: {
                normal: {
                  backgroundColor: theme.colors.red100,
                  boxShadow: `inset 0 0 0 1px ${theme.colors.red300}`,
                  color: theme.colors.red700,
                },
              },
            },
            yellow: {
              badge: {
                normal: {
                  backgroundColor: theme.colors.yellow100,
                  boxShadow: `inset 0 0 0 1px ${theme.colors.yellow300}`,
                  color: theme.colors.yellow700,
                },
              },
            },
          },
        },
      }}
    />
  );
});

Badge.defaultProps = {
  variant: 'gray',
};
