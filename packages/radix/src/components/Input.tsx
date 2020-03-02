import React from 'react';
import { Input as InputPrimitive, InputProps as InputPrimitiveProps } from '@modulz/primitives';
import { theme } from '../theme';

type Variant = 'normal' | 'ghost';
type Cursor = 'default' | 'text';
type Size = 0 | 1;

export type InputProps = InputPrimitiveProps & {
  variant?: Variant;
  cursor?: Cursor;
  size?: Size & any;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => (
  <InputPrimitive
    {...props}
    ref={forwardedRef}
    styleConfig={{
      base: {
        input: {
          normal: {
            color: theme.colors.gray800,
            fontFamily: theme.fonts.normal,
            fontVariantNumeric: 'tabular-nums',
            borderRadius: theme.radii[1],
          },
          readOnly: {
            color: theme.colors.gray700,
          },
          disabled: {
            backgroundColor: theme.colors.gray100,
            color: theme.colors.gray500,
            cursor: 'not-allowed',
          },
          focus: {
            boxShadow: `inset 0 0 0 1px ${theme.colors.blue500}, 0 0 0 1px ${theme.colors.blue500}`,
            cursor: 'text',
          },
        },
        placeholder: {
          normal: {
            color: theme.colors.gray600,
          },
        },
      },
      variants: {
        variant: {
          normal: {
            input: {
              normal: {
                boxShadow: `inset 0 0 0 1px ${theme.colors.gray300}`,
              },
            },
          },
        },
        size: {
          0: {
            input: {
              normal: {
                fontSize: theme.fontSizes[1],
                letterSpacing: '-0.01em',
                height: theme.sizes[5],
                lineHeight: theme.lineHeights[0], // Yields nice text selection height in Safari
                paddingLeft: theme.space[1],
                paddingRight: theme.space[1],
              },
            },
          },
          1: {
            input: {
              normal: {
                fontSize: theme.fontSizes[2],
                letterSpacing: '-0.01em',
                height: theme.sizes[6],
                lineHeight: theme.lineHeights[0], // Yields nice text selection height in Safari
                paddingLeft: theme.space[2],
                paddingRight: theme.space[2],
              },
            },
          },
        },
        cursor: {
          text: {
            input: {
              normal: {
                cursor: 'text',
              },
            },
          },
          default: {
            input: {
              normal: {
                cursor: 'default',
              },
            },
          },
        },
      },
    }}
  />
));

Input.defaultProps = {
  type: 'text',
  variant: 'normal',
  cursor: 'text',
  size: 0,
};
