import React from 'react';
import { Checkbox as CheckboxPrimitive, CheckboxProps as CheckboxPrimitiveProps } from 'mdlz-prmtz';
import { theme } from '../theme';

export type CheckboxProps = CheckboxPrimitiveProps;

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>((props, forwardedRef) => (
  <CheckboxPrimitive
    {...props}
    ref={forwardedRef}
    styleConfig={{
      base: {
        checkbox: {
          normal: {
            width: theme.sizes[4],
            height: theme.sizes[4],
            borderRadius: theme.radii[1],
            border: '1px solid',
            borderColor: theme.colors.gray400,
          },
          hover: {
            borderColor: theme.colors.gray500,
          },
          focus: {
            borderColor: theme.colors.gray600,
          },
          checked: {
            backgroundColor: theme.colors.blue600,
            borderColor: theme.colors.blue600,
          },
          disabled: {
            opacity: 0.5,
          },
        },
        icon: {
          normal: {
            color: theme.colors.white,
          },
        },
      },
    }}
  />
));
