import React from 'react';
import { Input as InputPrimitive, InputProps as InputPrimitiveProps } from 'mdlz-prmtz';
import { theme } from '../theme';

type Variant = 'normal' | 'ghost';
type Size = 0 | 1;

export type InputProps = InputPrimitiveProps & {
  variant?: Variant;
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
            cursor: 'default',
            color: theme.colors.gray800,
            fontFamily: theme.fonts.normal,
            border: '1px solid',
            borderColor: theme.colors.gray300,
            borderRadius: theme.radii[1],
          },
          readOnly: {
            borderColor: theme.colors.gray300,
            color: theme.colors.gray700,
          },
          disabled: {
            borderColor: theme.colors.gray300,
            color: theme.colors.gray500,
            cursor: 'not-allowed',
          },
          focus: {
            borderColor: theme.colors.blue500,
            boxShadow: `0 0 0 1px ${theme.colors.blue500}`,
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
                borderColor: theme.colors.gray300,
              },
            },
          },
          ghost: {
            input: {
              normal: {
                borderColor: 'transparent',
                cursor: 'text',
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
                lineHeight: theme.lineHeights[2],
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
                lineHeight: theme.lineHeights[4],
                paddingLeft: theme.space[2],
                paddingRight: theme.space[2],
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
  size: 0,
};
