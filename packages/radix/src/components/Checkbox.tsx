import React from 'react';
import {
  Checkbox as CheckboxPrimitive,
  CheckboxProps as CheckboxPrimitiveProps,
} from '@modulz/primitives';
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
            border: 0,
            boxShadow: `inset 0 0 0 1px ${theme.colors.gray400}`,
          },
          hover: {
            boxShadow: `inset 0 0 0 1px ${theme.colors.gray500}`,
          },
          focus: {
            boxShadow: `inset 0 0 0 1px ${theme.colors.blue500}, 0 0 0 1px ${theme.colors.blue500}`,
          },
          checked: {
            backgroundColor: theme.colors.blue600,
            boxShadow: 'none',
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
