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

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$3',

  variants: {
    size: {
      '1': {
        py: '$1',
        px: '$4',
      },
    },
    variant: {
      loContrast: {
        backgroundColor: '$loContrast',
      },
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
    rounded: {
      true: {
        borderRadius: '$pill',
      }
    },
    border: {
      true: {
        borderRadius: '$pill',
      }
    },
  },
  compoundVariants: [
    {
      border: 'true',
      variant: 'gray',
      css: {
        borderColor: '$slate500',
      },
    },
    {
      border: 'true',
      variant: 'blue',
      css: {
        borderColor: '$blue900',
      },
    },
    {
      border: 'true',
      variant: 'loContrast',
      css: {
        borderColor: '$slate500',
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
