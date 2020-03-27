import React from 'react';
import {
  ToggleButton as ToggleButtonPrimitive,
  ToggleButtonProps as ToggleButtonPrimitiveProps,
} from '@modulz/primitives';
import { theme } from '../theme';

type Size = 0 | 1;
type Variant = 'normal' | 'fade';

export type ToggleButtonProps = ToggleButtonPrimitiveProps & {
  size?: Size;
  variant?: Variant;
};

export const ToggleButton = React.forwardRef<HTMLButtonElement, ToggleButtonProps>(
  (props, forwardedRef) => (
    <ToggleButtonPrimitive
      {...props}
      ref={forwardedRef}
      styleConfig={{
        base: {
          button: {
            normal: {
              fontWeight: 400,
              fontFamily: theme.fonts.normal,
              fontVariantNumeric: 'tabular-nums',
              border: '1px solid',
              wordSpacing: '-0.025em',
              letterSpacing: '0.01em',
              zIndex: 0,
              '&:first-child': {
                borderTopLeftRadius: theme.radii[1],
                borderBottomLeftRadius: theme.radii[1],
              },
              '&:last-child ': {
                borderTopRightRadius: theme.radii[1],
                borderBottomRightRadius: theme.radii[1],
              },
            },
            hover: {
              zIndex: 1,
            },
            focus: {
              borderRadius: theme.radii[1],
              zIndex: 3,
            },
            toggled: {
              borderRadius: theme.radii[1],
              zIndex: 2,
            },
          },
        },
        variants: {
          size: {
            0: {
              button: {
                normal: {
                  height: theme.sizes[4],
                  fontSize: theme.fontSizes[0],
                  minWidth: theme.sizes[5],
                  lineHeight: 1.1,
                },
              },
            },
            1: {
              button: {
                normal: {
                  height: theme.sizes[5],
                  fontSize: theme.fontSizes[1],
                  minWidth: theme.sizes[5],
                  lineHeight: theme.lineHeights[0],
                },
              },
            },
          },
          variant: {
            normal: {
              button: {
                normal: {
                  color: theme.colors.gray700,
                  borderColor: theme.colors.gray400,
                  backgroundColor: theme.colors.gray100,
                },
                hover: {
                  borderColor: theme.colors.gray500,
                },
                focus: {
                  borderColor: theme.colors.gray500,
                  boxShadow: `0 0 0 1px ${theme.colors.gray500}`,
                },
                toggled: {
                  color: theme.colors.blue800,
                  fontWeight: 500,
                  wordSpacing: '0.02em',
                  letterSpacing: '-0.015em',
                  borderColor: 'transparent',
                  backgroundColor: theme.colors.blue100,
                  boxShadow: `0 0 0 1px ${theme.colors.blue500}`,
                  '&:focus': {
                    borderColor: theme.colors.blue500,
                    boxShadow: `0 0 0 1px ${theme.colors.blue500}`,
                  },
                  '&:hover': {
                    borderColor: 'transparent',
                  },
                },
              },
            },
            fade: {
              button: {
                normal: {
                  color: theme.colors.gray600,
                  backgroundColor: theme.colors.white,
                  borderColor: theme.colors.gray300,
                },
                hover: {
                  borderColor: theme.colors.gray300,
                },
                focus: {
                  color: theme.colors.gray700,
                  borderColor: theme.colors.gray500,
                  boxShadow: `0 0 0 1px ${theme.colors.gray500}`,
                },
                toggled: {
                  color: theme.colors.gray700,
                  borderColor: 'transparent',
                  backgroundColor: theme.colors.gray100,
                  boxShadow: `0 0 0 1px ${theme.colors.gray400}`,
                  '&:hover': {
                    borderColor: 'transparent',
                  },
                  '&:focus': {
                    borderColor: theme.colors.blue500,
                    boxShadow: `0 0 0 1px ${theme.colors.blue500}`,
                  },
                },
              },
            },
          },
        },
      }}
    />
  )
);

ToggleButton.defaultProps = {
  size: 1,
  variant: 'normal',
};
