import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'section';

type ButtonCSSProp = { css?: CSS };
type SectionVariants = StitchesVariants<typeof StyledSection>;
type SectionOwnProps = ButtonCSSProp & SectionVariants;

const StyledSection = styled(DEFAULT_TAG, {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
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
});

type SectionComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, SectionOwnProps>;

export const Section = React.forwardRef((props, forwardedRef) => {
  return <StyledSection {...props} ref={forwardedRef} />;
}) as SectionComponent;
