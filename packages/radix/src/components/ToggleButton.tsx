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

type ToggleButtonProps = ToggleButtonPrimitiveProps & {
  size?: Prop<Sizes>;
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
            color: 'gray700',
            wordSpacing: '-0.025em',
            letterSpacing: '0.01em',
            ':first-child': {
              borderTopLeftRadius: themeGet('radii.1')(props),
              borderBottomLeftRadius: themeGet('radii.1')(props),
            },
            ':last-child ': {
              borderTopRightRadius: themeGet('radii.1')(props),
              borderBottomRightRadius: themeGet('radii.1')(props),
            },
            ':hover': {
              zIndex: 2, // TODO: Review in Primitives, this removes the overlapping
            },
            ':focus': {
              outline: 'none',
              zIndex: '5 !important', // TODO: Review in Primitives
              borderRadius: 1,
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
                /**
                 * TODO: Consider using box shadow for consistency
                 *
                 * This isn't too straightforward though. We can’t reliably center elements inside `ToggleButton` —
                 * like same height icons — unless we remove the borders and use box-shadows instead, but also can’t
                 * remove the borders and use box-shadows, because we use negative margins to compensate for adjacent
                 * border.
                 */
                borderColor: 'transparent',
                ':hover': {
                  borderColor: 'transparent',
                },
                ':focus': {
                  borderColor: 'blue500',
                  boxShadow: `0 0 0 1px ${themeGet('colors.blue500')(props)}`,
                },
              },
              1: {
                height: 5,
                padding: 0,
                fontSize: 1,
                minWidth: 5,
                lineHeight: 0,
                borderColor: 'gray400', // TODO: Consider using box shadow for consistency
                backgroundColor: 'gray100',
                ':hover': {
                  borderColor: 'gray500',
                },
                ':focus': {
                  borderColor: 'blue500',
                  boxShadow: `0 0 0 1px ${themeGet('colors.blue500')(props)}`,
                },
              },
            },
          }),
        ]}
        activeCss={[
          css({
            fontWeight: 500,
            letterSpacing: '-0.015em',
            wordSpacing: '0.02em',
            backgroundColor: 'blue100',
            borderColor: 'transparent',
            color: 'blue800',
            borderRadius: 1,
            boxShadow: `0 0 0 1px ${themeGet('colors.blue500')(props)}`,
            ':focus': {
              borderColor: 'blue500',
              boxShadow: `0 0 0 1px ${themeGet('colors.blue500')(props)}`,
            },
          }),
        ]}
      />
    );
  })
);

ToggleButton.defaultProps = {
  size: 1,
};
