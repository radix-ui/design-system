import React from 'react';
import { withTheme } from 'styled-components';
import css from '@styled-system/css';
import themeGet from '@styled-system/theme-get';
import { variant, Prop } from '@modulz/radix-system';
import {
  ToggleButtonGroup as ToggleButtonGroupPrimitive,
  ToggleButtonGroupProps as ToggleButtonGroupPrimitiveProps,
  ToggleButton as ToggleButtonPrimitive,
  ToggleButtonProps as ToggleButtonPrimitiveProps,
} from 'mdlz-prmtz';

type ToggleButtonGroupProps<T> = ToggleButtonGroupPrimitiveProps<T>;

export const ToggleButtonGroup = <T extends string | string[] | null>(
  props: ToggleButtonGroupProps<T>
) => <ToggleButtonGroupPrimitive {...props} />;

type Variants = 'normal';
type VariantProps = { variant?: Prop<Variants> };
type ToggleButtonProps = ToggleButtonPrimitiveProps &
  VariantProps & {
    // TODO: type Theme
    theme?: any;
  };

export const ToggleButton = withTheme(
  React.forwardRef<HTMLButtonElement, ToggleButtonProps>((props, ref) => {
    return (
      <ToggleButtonPrimitive
        {...props}
        ref={ref}
        css={[
          css({
            height: 5,
            minWidth: 5,
            fontFamily: 'normal',
            fontWeight: 500,
            fontSize: 2,
            padding: 0,
            backgroundColor: 'gray100',
            border: '1px solid',
            borderColor: 'gray400',
            color: 'gray700',
            ':first-child': {
              borderTopLeftRadius: themeGet('radii.1')(props),
              borderBottomLeftRadius: themeGet('radii.1')(props),
            },
            ':last-child ': {
              borderTopRightRadius: themeGet('radii.1')(props),
              borderBottomRightRadius: themeGet('radii.1')(props),
            },
            ':hover': {
              borderColor: 'gray500',
              zIndex: 2, // TODO: Review in Primitives, this removes the overlapping
            },
            ':focus': {
              outline: 'none',
              borderColor: 'blue500',
              boxShadow: `0 0 0 1px ${themeGet('colors.blue500')(props)}`,
              zIndex: '5 !important', // TODO: Review in Primitives
              borderRadius: 1,
            },
          }),
          { lineHeight: '1' },
        ]}
        activeCss={css({
          backgroundColor: 'blue100',
          borderColor: 'transparent',
          color: 'blue800',
          borderRadius: 1,
          boxShadow: `0 0 0 1px ${themeGet('colors.blue500')(props)}`,
          '&:focus': {
            boxShadow: `0 0 0 2px ${themeGet('colors.blue500')(props)}`,
          },
        })}
      />
    );
  })
);

ToggleButton.defaultProps = { variant: 'normal' };
