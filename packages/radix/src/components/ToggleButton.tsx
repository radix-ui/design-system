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

type Variants = 'normal' | 'fade';
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
            fontFamily: 'medium',
            fontWeight: 500,
            fontSize: 2,
            padding: 0,
            backgroundColor: 'white',
            border: '1px solid',
            borderColor: 'gray400',
            color: 'gray600',
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
            },
            ':focus': {
              outline: 'none',
              borderColor: 'gray500',
            },
          }),
          { lineHeight: 1 },
        ]}
        activeCss={variant({
          variant: {
            normal: {
              backgroundColor: 'blue100',
              borderColor: 'blue300',
              color: 'blue600',
            },
            fade: {
              backgroundColor: 'gray200',
              borderColor: 'gray500',
              color: 'gray600',
            },
          },
        })(props)}
      />
    );
  })
);

ToggleButton.defaultProps = { variant: 'normal' };
