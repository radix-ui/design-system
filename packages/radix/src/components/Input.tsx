import React from 'react';
import css from '@styled-system/css';
import { variant, Prop } from '@modulz/radix-system';
import { Input as InputPrimitive, InputProps as InputPrimitiveProps } from 'mdlz-prmtz';

type VariantProps = 'normal' | 'ghost' | 'fade';
type SizeProps = 0 | 1;

// TODO: Fix `size` typing
export type InputProps = InputPrimitiveProps & {
  variant?: Prop<VariantProps>;
  size?: Prop<SizeProps> & any;
  children?: React.ReactNode;
};

const placeholderStyle = {
  color: 'gray500',
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <InputPrimitive
    {...props}
    ref={ref}
    css={[
      css({
        appearance: 'none',
        backgroundColor: 'transparent',
        borderRadius: 0,
        color: 'gray900',
        fontFamily: 'normal',
        outline: 'none',
        padding: 0,
        verticalAlign: 'middle',
        width: '100%',
        boxSizing: 'border-box',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        border: 0,
        borderBottom: '1px solid',
        '&:read-only': {
          borderColor: 'gray300',
          color: 'gray600',
        },
        '&:disabled': {
          borderColor: 'gray300',
          color: 'gray500',
          cursor: 'not-allowed',
        },
      }),
      variant({
        size: {
          0: { fontSize: 2, height: 5, lineHeight: 1 },
          1: { fontSize: 3, height: 6, lineHeight: 3 },
        },
      }),
      variant({
        variant: {
          normal: {
            borderColor: 'gray400',
            '&:focus': {
              borderColor: 'blue500',
            },
          },
          fade: {
            borderColor: 'gray400',
            color: 'gray600',
            '&:focus': {
              borderColor: 'blue500',
            },
          },
          ghost: {
            borderColor: 'transparent',
          },
        },
      }),
    ]}
    placeholderCss={placeholderStyle}
  />
));

Input.defaultProps = { type: 'text', variant: 'normal', size: 0 };
