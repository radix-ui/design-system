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

type Variants = 'normal' | 'fade';
type VariantProps = { variant?: Prop<Variants> };
type ToggleButtonGroupProps<T> = ToggleButtonGroupPrimitiveProps<T> & VariantProps;

export const ToggleButtonGroup = <T extends string | string[] | null>(
  props: ToggleButtonGroupProps<T>
) => <ToggleButtonGroupPrimitive {...props} />;

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
            borderColor: 'grays.3',
            color: 'grays.5',
            ':first-child': {
              borderTopLeftRadius: themeGet('radii.1')(props),
              borderBottomLeftRadius: themeGet('radii.1')(props),
            },
            ':last-child ': {
              borderTopRightRadius: themeGet('radii.1')(props),
              borderBottomRightRadius: themeGet('radii.1')(props),
            },
            ':hover': {
              borderColor: 'grays.4',
            },
            ':focus': {
              outline: 'none',
              borderColor: 'grays.4',
            },
          }),
          { lineHeight: 1 },
        ]}
        activeCss={variant({
          variant: {
            normal: {
              backgroundColor: 'blues.0',
              borderColor: 'blues.2',
              color: 'blues.5',
            },
            fade: {
              backgroundColor: 'grays.1',
              borderColor: 'grays.4',
              color: 'grays.5',
            },
          },
        })(props)}
      />
    );
  })
);

ToggleButton.defaultProps = { variant: 'normal' };
