import React from 'react';
import {
  Select as SelectPrimitive,
  SelectProps as SelectPrimitiveProps,
  StyleConfig,
  SelectParts,
} from '@modulz/primitives';
import merge from 'lodash.merge';
import { theme } from '../theme';
import { menuStyleConfig } from './Menu';

export { Option, OptionProps, OptionGroup, OptionGroupProps } from '@modulz/primitives';

type Variant = 'normal' | 'ghost';
type Size = 0 | 1;

export type SelectProps = SelectPrimitiveProps & { variant?: Variant; size?: Size };

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>((props, forwardedRef) => {
  return <SelectPrimitive ref={forwardedRef} styleConfig={selectStyleConfig} {...props} />;
});

Select.defaultProps = {
  variant: 'normal',
  size: 0 as const,
};

const selectStyleConfigOverrides: StyleConfig<SelectParts> = {
  base: {
    button: {
      normal: {
        fontFamily: theme.fonts.normal,
        fontVariantNumeric: 'tabular-nums',
        lineHeight: theme.lineHeights[0],
        borderRadius: theme.radii[1],
        letterSpacing: '-0.001em',
        justifyContent: 'space-between',
        flexWrap: 'wrap', // allows the button to shrink
      },
      focus: {
        boxShadow: `inset 0 0 0 1px ${theme.colors.gray500}, 0 0 0 1px ${theme.colors.gray500}`,
      },
      disabled: {
        color: theme.colors.gray500,
        cursor: 'not-allowed',
      },
    },
    buttonIcon: {
      normal: {
        marginLeft: theme.space[1],
      },
    },
    item: {
      normal: {},
      grouped: {
        paddingLeft: theme.space[6],
      },
    },
  },
  variants: {
    variant: {
      normal: {
        button: {
          normal: {
            backgroundColor: theme.colors.gray100,
            boxShadow: `inset 0 0 0 1px ${theme.colors.gray300}`,
          },
          hover: {
            boxShadow: `inset 0 0 0 1px ${theme.colors.gray400}`,
          },
        },
      },
      ghost: {
        button: {
          normal: {
            mixBlendMode: 'multiply',
          },
          hover: {
            backgroundColor: theme.colors.gray200,
          },
        },
      },
    },
    size: {
      0: {
        button: {
          normal: {
            fontSize: theme.fontSizes[1],
            height: theme.sizes[5],
            paddingLeft: theme.space[1],
            paddingRight: theme.space[1],
          },
        },
      },
      1: {
        button: {
          normal: {
            fontSize: theme.fontSizes[2],
            height: theme.sizes[6],
            paddingLeft: theme.space[2],
            paddingRight: theme.space[2],
          },
        },
      },
    },
  },
};

const selectStyleConfig: StyleConfig<SelectParts> = merge(
  {},
  menuStyleConfig,
  selectStyleConfigOverrides
);
