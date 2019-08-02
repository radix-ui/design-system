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
  ToggleButtonWrapper as Wrapper,
  ToggleButtonRadio as Radio,
} from '@modulz/primitives';

type Variants = 'normal' | 'fade';
type VariantProps = { variant?: Prop<Variants> };
type ToggleButtonGroupProps = ToggleButtonGroupPrimitiveProps & VariantProps;

export const ToggleButtonGroup = (props: ToggleButtonGroupProps) => (
  <ToggleButtonGroupPrimitive {...props} />
);

type ToggleButtonProps = ToggleButtonPrimitiveProps &
  VariantProps & {
    // TODO: type Theme
    theme?: any;
  };

export const ToggleButton = withTheme((props: ToggleButtonProps) => (
  <ToggleButtonPrimitive
    {...props}
    css={[
      css({
        height: 5,
        width: '100%',
        minWidth: 5,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'medium',
        fontWeight: 500,
        fontSize: 2,
        lineHeight: 1,
        whiteSpace: 'nowrap',
        border: '1px solid',
        borderColor: 'grays.3',
        color: 'grays.5',
        userSelect: 'none',
        [`${Wrapper}:first-child &`]: {
          borderTopLeftRadius: themeGet('radii.1')(props),
          borderBottomLeftRadius: themeGet('radii.1')(props),
        },
        [`${Wrapper}:last-child &`]: {
          borderTopRightRadius: themeGet('radii.1')(props),
          borderBottomRightRadius: themeGet('radii.1')(props),
        },
        [`${Wrapper}:hover &`]: {
          borderColor: 'grays.4',
          zIndex: 1,
        },
        [`${Radio}:checked + &`]: {
          zIndex: 1,
        },
      }),
      variant({
        variant: {
          normal: {
            [`${Radio}:checked + &`]: {
              backgroundColor: 'blues.0',
              borderColor: 'blues.2',
              color: 'blues.5',
            },
          },
          fade: {
            [`${Radio}:checked + &`]: {
              backgroundColor: 'grays.1',
              borderColor: 'grays.4',
              color: 'grays.5',
            },
          },
        },
      })(props),
    ]}
  />
));

ToggleButton.defaultProps = { variant: 'normal' };
