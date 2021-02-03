import React from 'react';
import { styled, StitchesProps, StitchesVariants } from '../stitches.config';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

type SeparatorCSSProp = Pick<StitchesProps<typeof StyledSeparator>, 'css'>;
type SeparatorVariants = StitchesVariants<typeof StyledSeparator>;
type SeparatorOwnProps = Polymorphic.OwnProps<typeof SeparatorPrimitive.Root> &
  SeparatorCSSProp &
  SeparatorVariants;

const StyledSeparator = styled(SeparatorPrimitive.Root, {
  border: 'none',
  margin: 0,
  flexShrink: 0,
  backgroundColor: '$gray500',
  cursor: 'default',

  variants: {
    size: {
      '1': {
        '&[data-orientation="horizontal"]': {
          height: '1px',
          width: '$3',
        },

        '&[data-orientation="vertical"]': {
          width: '1px',
          height: '$3',
        },
      },
      '2': {
        '&[data-orientation="horizontal"]': {
          height: '1px',
          width: '$7',
        },

        '&[data-orientation="vertical"]': {
          width: '1px',
          height: '$7',
        },
      },
    },
  },
});

type SeparatorComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof SeparatorPrimitive.Root>,
  SeparatorOwnProps
>;

export const Separator = React.forwardRef((props, forwardedRef) => {
  return <StyledSeparator {...props} ref={forwardedRef} />;
}) as SeparatorComponent;
