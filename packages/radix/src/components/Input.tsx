import React from 'react';
import { withTheme } from 'styled-components';
import css from '@styled-system/css';
import themeGet from '@styled-system/theme-get';
import { variant, Prop } from '@modulz/radix-system';
import { Input as InputPrimitive, InputProps as InputPrimitiveProps } from 'mdlz-prmtz';

type VariantProps = 'normal' | 'ghost' | 'fade';
type SizeProps = 0 | 1;

// TODO: Fix `size` typing
export type InputProps = InputPrimitiveProps & {
  variant?: Prop<VariantProps>;
  size?: Prop<SizeProps> & any;
  children?: React.ReactNode;
  // TODO: type Theme
  theme?: any;
};

const placeholderStyle = {
  color: 'gray600',
};

export const Input = withTheme(
  React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
    <InputPrimitive
      {...props}
      ref={ref}
      css={[
        css({
          appearance: 'none',
          backgroundColor: 'transparent',
          cursor: 'default',
          color: 'gray800',
          fontFamily: 'normal',
          outline: 'none',
          paddingY: 0,
          verticalAlign: 'middle',
          width: '100%',
          boxSizing: 'border-box',
          WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
          border: '1px solid',
          borderColor: 'gray300',
          borderRadius: 1,
          '&:read-only': {
            borderColor: 'gray300',
            color: 'gray700',
          },
          '&:disabled': {
            borderColor: 'gray300',
            color: 'gray500',
            cursor: 'not-allowed',
          },
          '&:focus': {
            borderColor: 'blue500',
            boxShadow: `0 0 0 1px ${themeGet('colors.blue500')(props)}`,
          },
        }),
        variant({
          size: {
            0: { fontSize: 1, height: 5, lineHeight: 1, paddingX: 1 },
            1: { fontSize: 2, height: 6, lineHeight: 3, paddingX: 2 },
          },
        }),
        variant({
          variant: {
            normal: {
              borderColor: 'gray300',
            },
            fade: {
              borderColor: 'gray400',
              color: 'gray700',
            },
            ghost: {
              borderColor: 'transparent',
            },
          },
        }),
      ]}
      placeholderCss={placeholderStyle}
    />
  ))
);

Input.defaultProps = { type: 'text', variant: 'normal', size: 0 };
