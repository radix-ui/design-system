import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'div';

const StyledBanner = styled(DEFAULT_TAG, {
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
        backgroundColor: '$slate3',
      },
      blue: {
        backgroundColor: '$blue3',
      },
      green: {
        backgroundColor: '$green3',
      },
      red: {
        backgroundColor: '$red3',
      },
    },
    rounded: {
      true: {
        borderRadius: '$pill',
      },
    },
    border: {
      true: {
        borderRadius: '$pill',
      },
    },
  },
  compoundVariants: [
    {
      border: 'true',
      variant: 'gray',
      css: {
        borderColor: '$slate6',
      },
    },
    {
      border: 'true',
      variant: 'blue',
      css: {
        borderColor: '$blue11',
      },
    },
    {
      border: 'true',
      variant: 'loContrast',
      css: {
        borderColor: '$slate6',
      },
    },
  ],
  defaultVariants: {
    size: '1',
    variant: 'gray',
  },
});

type BannerCSSProp = { css?: CSS };
// TODO: Remove omit fix when this is merged https://github.com/modulz/stitches/issues/421
type BannerVariants = Omit<StitchesVariants<typeof StyledBanner>, 'size'>;
type BannerOwnProps = BannerCSSProp & BannerVariants & { size?: any };

type BannerComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, BannerOwnProps>;

export const Banner = React.forwardRef((props, forwardedRef) => {
  return <StyledBanner {...props} ref={forwardedRef} />;
}) as BannerComponent;

Banner.toString = () => `.${StyledBanner.className}`;
