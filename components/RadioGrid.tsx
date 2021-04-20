import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

export const RadioGridGroup = styled(RadioGroupPrimitive.Root, {
  display: 'grid',
  gap: '$1',
  gridTemplateColumns: 'repeat(5, 1fr)',
});

type RadioCSSProp = { css?: CSS };
type RadioVariants = StitchesVariants<typeof StyledRadio>;
type RadioOwnProps = Polymorphic.OwnProps<typeof RadioGroupPrimitive.Item> &
  RadioCSSProp &
  RadioVariants;

const StyledRadio = styled(RadioGroupPrimitive.Item, {
  borderRadius: '$2',
  boxShadow: 'inset 0 0 0 1px $colors$slate600',
  px: '$1',
  height: '$6',
  lineHeight: '$sizes$6',
  fontSize: '$3',
  '@hover': {
    '&:hover': {
      boxShadow: 'inset 0 0 0 1px $colors$slate700',
    },
  },
  '&[data-state="checked"]': {
    boxShadow: 'inset 0 0 0 1px $colors$slate700',
    backgroundColor: '$slate300',
  },
});

type RadioComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof RadioGroupPrimitive.Item>,
  RadioOwnProps
>;

export const RadioGrid = React.forwardRef((props, forwardedRef) => (
  <StyledRadio {...props} ref={forwardedRef}>
    {props.children}
  </StyledRadio>
)) as RadioComponent;
