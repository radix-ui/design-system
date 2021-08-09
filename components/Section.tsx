import React from 'react';
import { styled, CSS, VariantProps } from '../stitches.config';

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
        py: '$5',
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

type SectionCSSProp = { css?: CSS };
type SectionVariants = VariantProps<typeof StyledSection>;
type SectionOwnProps = SectionCSSProp & SectionVariants;

type SectionComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, SectionOwnProps>;

export const Section = React.forwardRef((props, forwardedRef) => {
  return <StyledSection {...props} ref={forwardedRef} />;
}) as SectionComponent;
