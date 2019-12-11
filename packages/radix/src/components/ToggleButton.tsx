import React from 'react';
import { withTheme } from 'styled-components';
import css from '@styled-system/css';
import themeGet from '@styled-system/theme-get';
import { Prop, variant } from '@modulz/radix-system';
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

type Sizes = 0 | 1;
type Variants = 'normal' | 'fade';

type ToggleButtonProps = ToggleButtonPrimitiveProps & {
  size?: Prop<Sizes>;
  variant?: Prop<Variants>;
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
            fontWeight: 400,
            fontFamily: 'normal',
            border: '1px solid',
            wordSpacing: '-0.025em',
            letterSpacing: '0.01em',
            '&:hover': {
              zIndex: 2, // TODO: Review in Primitives, this removes the overlapping
            },
            '&:focus': {
              outline: 'none',
              zIndex: '5 !important', // TODO: Review in Primitives
            },
          }),
          variant({
            size: {
              0: {
                height: 3,
                padding: 0,
                fontSize: 0,
                minWidth: 4,
                lineHeight: 1.1,
                '&:first-child': {
                  // TODO: consider adding 2px radius to the theme
                  borderTopLeftRadius: '2px',
                  borderBottomLeftRadius: '2px',
                },
                '&:last-child ': {
                  borderTopRightRadius: '2px',
                  borderBottomRightRadius: '2px',
                },
                '&:focus': {
                  borderRadius: '2px',
                },
              },
              1: {
                height: 5,
                padding: 0,
                fontSize: 1,
                minWidth: 5,
                lineHeight: 0,
                '&:first-child': {
                  borderTopLeftRadius: themeGet('radii.1')(props),
                  borderBottomLeftRadius: themeGet('radii.1')(props),
                },
                '&:last-child ': {
                  borderTopRightRadius: themeGet('radii.1')(props),
                  borderBottomRightRadius: themeGet('radii.1')(props),
                },
                '&:focus': {
                  borderRadius: 1,
                },
              },
            },
          }),
          variant({
            variant: {
              normal: {
                color: 'gray700',
                borderColor: props.size === 0 ? 'transparent' : 'gray400',
                backgroundColor: props.size === 0 ? 'white' : 'gray100',
                /**
                 * TODO: Consider using box shadow for consistency
                 *
                 * This isn't too straightforward though. We can’t reliably center elements inside `ToggleButton` —
                 * like same height icons — unless we remove the borders and use box-shadows instead, but also can’t
                 * remove the borders and use box-shadows, because we use negative margins to compensate for adjacent
                 * border.
                 */
                '&:hover': {
                  borderColor: props.size === 0 ? 'transparent' : 'gray500',
                },
                '&:focus': {
                  borderColor: 'blue500',
                  boxShadow: `0 0 0 1px ${themeGet('colors.blue500')(props)}`,
                },
              },
              fade: {
                color: 'gray600',
                backgroundColor: 'white',
                borderColor: props.size === 0 ? 'transparent' : 'gray300',
                '&:hover': {
                  borderColor: props.size === 0 ? 'transparent' : 'gray300',
                },
                '&:focus': {
                  color: 'gray700',
                  borderColor: 'blue500',
                  boxShadow: `0 0 0 1px ${themeGet('colors.blue500')(props)}`,
                },
              },
            },
          }),
        ]}
        activeCss={[
          variant({
            variant: {
              normal: {
                color: 'blue800',
                fontWeight: 500,
                wordSpacing: '0.02em',
                letterSpacing: '-0.015em',
                borderColor: 'transparent',
                backgroundColor: 'blue100',
                boxShadow: `0 0 0 1px ${themeGet('colors.blue500')(props)}`,
                '&:focus': {
                  borderColor: 'blue500',
                  boxShadow: `0 0 0 1px ${themeGet('colors.blue500')(props)}`,
                },
              },
              fade: {
                color: 'gray700',
                borderColor: 'transparent',
                backgroundColor: 'gray100',
                boxShadow: `0 0 0 1px ${themeGet('colors.gray400')(props)}`,
                '&:focus': {
                  borderColor: 'blue500',
                  boxShadow: `0 0 0 1px ${themeGet('colors.blue500')(props)}`,
                },
              },
            },
          })(props),
          variant({
            size: {
              0: {
                // TODO: consider adding 2px radius to the theme
                borderRadius: '2px',
              },
              1: {
                borderRadius: 1,
              },
            },
          })(props),
        ]}
      />
    );
  })
);

ToggleButton.defaultProps = {
  size: 1,
  variant: 'normal',
};
