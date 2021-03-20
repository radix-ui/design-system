import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'section';

const StyledSection = styled(DEFAULT_TAG, {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,
  '&::before': {
    boxSizing: 'border-box',
    content: '""',
  },
  '&::after': {
    boxSizing: 'border-box',
    content: '""',
  },

  variants: {
    size: {
      '1': {
        py: '$3',
      },
      '2': {
        py: '$7',
      },
      '3': {
        py: '$9',
      },
    },
  },
  defaultVariants: {
    size: '3',
  },
});

type ButtonCSSProp = { css?: CSS };
// TODO: Remove omit fix when this is merged https://github.com/modulz/stitches/issues/421
type SectionVariants = Omit<StitchesVariants<typeof StyledSection>, 'size'>;
type SectionOwnProps = ButtonCSSProp & SectionVariants & { size?: any };

type SectionComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, SectionOwnProps>;

export const Section = React.forwardRef((props, forwardedRef) => {
  return <StyledSection {...props} ref={forwardedRef} />;
}) as SectionComponent;
