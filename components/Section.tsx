import React from 'react';
import { styled, StitchesProps, StitchesVariants } from '../stitches.config';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'section';

type SectionCSSProp = Pick<StitchesProps<typeof StyledSection>, 'css'>;
type SectionVariants = StitchesVariants<typeof StyledSection>;
type SectionOwnProps = SectionCSSProp & SectionVariants;

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
