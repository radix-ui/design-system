import React from 'react';
import {
  Select as SelectPrimitive,
  SelectProps as SelectPrimitiveProps,
  StyleConfig,
  SelectParts,
} from 'mdlz-prmtz';
import { transparentize } from 'polished';
import merge from 'lodash.merge';
import { theme } from '../theme';
import { menuStyleConfig } from './Menu';

export { Option, OptionProps, OptionGroup, OptionGroupProps } from 'mdlz-prmtz';

type Variant = 'normal' | 'ghost';
type Size = 0 | 1;

export type SelectProps = SelectPrimitiveProps & { variant?: Variant; size?: Size };

export const Select = (props: SelectProps) => {
  return <SelectPrimitive styleConfig={selectStyleConfig} {...props} />;
};

Select.defaultProps = {
  size: 0,
};

const selectStyleConfigOverrides: StyleConfig<SelectParts> = {
  base: {
    button: {
      normal: {
        backgroundColor: theme.colors.gray100,
        fontFamily: theme.fonts.normal,
        lineHeight: theme.lineHeights[0],
        borderRadius: theme.radii[1],
        border: '1px solid',
        borderColor: theme.colors.gray300,
        letterSpacing: '-0.01em',
        justifyContent: 'space-between',
        flexWrap: 'wrap', // allows the button to shrink
      },
      hover: {
        borderColor: theme.colors.gray400,
      },
      focus: {
        borderColor: theme.colors.blue500,
        boxShadow: `0 0 0 1px ${theme.colors.blue500}`,
      },
      disabled: {
        borderColor: theme.colors.gray300,
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
            color: theme.colors.gray800,
          },
        },
      },
      ghost: {
        button: {
          normal: {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
          },
          focus: {
            borderColor: theme.colors.blue500,
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
