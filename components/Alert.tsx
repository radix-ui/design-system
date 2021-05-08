import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'div';

const StyledAlert = styled(DEFAULT_TAG, {
  // Reset
  boxSizing: 'border-box',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  variants: {
    size: {
      '1': {
        p: '$2',
      },
    },
    variant: {
      gray: {
        backgroundColor: '$slate200',
      },
      blue: {
        backgroundColor: '$blue200',
      },
      green: {
        backgroundColor: '$green200',

      },
      red: {
        backgroundColor: '$red200',

      },
    },
    ghost: {
      true: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }
    },
  },
  compoundVariants: [
    {
      variant: 'gray',
      ghost: 'true',
      css: {
        backgroundColor: 'transparent',
        color: '$hiContrast',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slate200',
            boxShadow: 'none',
          },
        },
        '&:active': {
          backgroundColor: '$slate300',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate700, 0 0 0 1px $colors$slate700',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$slate300',
        },
      },
    },
  ],
  defaultVariants: {
    size: '1',
    variant: 'gray',
  },
});

type AlertCSSProp = { css?: CSS };
// TODO: Remove omit fix when this is merged https://github.com/modulz/stitches/issues/421
type AlertVariants = Omit<StitchesVariants<typeof StyledAlert>, 'size'>;
type AlertOwnProps = AlertCSSProp & AlertVariants & { size?: any };

type AlertComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, AlertOwnProps>;

export const Alert = React.forwardRef((props, forwardedRef) => {
  return <StyledAlert {...props} ref={forwardedRef} />;
}) as AlertComponent;

Alert.toString = () => `.${StyledAlert.className}`;
