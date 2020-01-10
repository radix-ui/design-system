import React from 'react';
import {
  ToggleButtonGroup as ToggleButtonGroupPrimitive,
  ToggleButtonGroupProps as ToggleButtonGroupPrimitiveProps,
} from 'mdlz-prmtz';
import { theme } from '../theme';

export { ToggleButton, ToggleButtonProps } from 'mdlz-prmtz';

type Size = 0 | 1;
type Variant = 'normal' | 'fade';

export type ToggleButtonGroupProps<T> = ToggleButtonGroupPrimitiveProps<T> & {
  size?: Size;
  variant?: Variant;
};

export const ToggleButtonGroup = <T extends string | string[] | null>(
  props: ToggleButtonGroupProps<T>
) => (
  <ToggleButtonGroupPrimitive
    {...props}
    styleConfig={{
      base: {
        button: {
          normal: {
            fontWeight: 400,
            fontFamily: theme.fonts.normal,
            border: '1px solid',
            wordSpacing: '-0.025em',
            letterSpacing: '0.01em',
          },
        },
      },
      variants: {
        size: {
          0: {
            button: {
              normal: {
                height: theme.sizes[3],
                fontSize: theme.fontSizes[0],
                minWidth: theme.sizes[4],
                lineHeight: 1.1,
                '&:first-child': {
                  borderTopLeftRadius: 2,
                  borderBottomLeftRadius: 2,
                },
                '&:last-child ': {
                  borderTopRightRadius: 2,
                  borderBottomRightRadius: 2,
                },
              },
              focus: {
                borderRadius: 2,
              },
              toggled: {
                borderRadius: 2,
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
                '&:first-child': {
                  borderTopLeftRadius: theme.radii[1],
                  borderBottomLeftRadius: theme.radii[1],
                },
                '&:last-child ': {
                  borderTopRightRadius: theme.radii[1],
                  borderBottomRightRadius: theme.radii[1],
                },
              },
              focus: {
                borderRadius: theme.radii[1],
              },
              toggled: {
                borderRadius: theme.radii[1],
              },
            },
          },
        },
        variant: {
          normal: {
            button: {
              normal: {
                color: theme.colors.gray700,
                borderColor: props.size === 0 ? 'transparent' : theme.colors.gray400,
                backgroundColor: props.size === 0 ? theme.colors.white : theme.colors.gray100,
              },
              hover: {
                borderColor: props.size === 0 ? 'transparent' : theme.colors.gray500,
              },
              focus: {
                borderColor: theme.colors.blue500,
                boxShadow: `0 0 0 1px ${theme.colors.blue500}`,
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
              },
            },
          },
          fade: {
            button: {
              normal: {
                color: theme.colors.gray600,
                backgroundColor: theme.colors.white,
                borderColor: props.size === 0 ? 'transparent' : theme.colors.gray300,
              },
              hover: {
                borderColor: props.size === 0 ? 'transparent' : theme.colors.gray300,
              },
              focus: {
                color: theme.colors.gray700,
                borderColor: theme.colors.blue500,
                boxShadow: `0 0 0 1px ${theme.colors.blue500}`,
              },
              toggled: {
                color: theme.colors.gray700,
                borderColor: 'transparent',
                backgroundColor: theme.colors.gray100,
                boxShadow: `0 0 0 1px ${theme.colors.gray400}`,
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
);

ToggleButtonGroup.defaultProps = {
  size: 1,
  variant: 'normal',
};
