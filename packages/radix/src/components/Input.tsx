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
  color: 'grays.4',
};

export const Input = (props: InputProps) => (
  <InputPrimitive
    {...props}
    css={[
      css({
        appearance: 'none',
        backgroundColor: 'transparent',
        borderRadius: 0,
        color: 'grays.8',
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
          borderColor: 'grays.2',
          color: 'grays.5',
        },
        '&:disabled': {
          borderColor: 'grays.2',
          color: 'grays.4',
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
            borderColor: 'grays.3',
            '&:focus': {
              borderColor: 'blues.4',
            },
          },
          fade: {
            borderColor: 'grays.3',
            color: 'grays.5',
            '&:focus': {
              borderColor: 'blues.4',
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
);

Input.defaultProps = { type: 'text', variant: 'normal', size: 0 };
