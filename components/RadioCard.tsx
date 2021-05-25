import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

export const RadioCardGroup = styled(RadioGroupPrimitive.Root, {
  display: 'block',
});

type RadioCSSProp = { css?: CSS };
type RadioVariants = StitchesVariants<typeof StyledRadio>;
type RadioOwnProps = Polymorphic.OwnProps<typeof RadioGroupPrimitive.Item> &
  RadioCSSProp &
  RadioVariants;

const StyledRadioButton = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$round',
  width: 25,
  height: 25,
  boxShadow: 'inset 0 0 0 1px $colors$slate7',
  flexShrink: 0,
  mr: '$3',
});

const StyledRadioIndicator = styled('div', {
  borderRadius: '$round',
  width: 15,
  height: 15,
  backgroundColor: '$blue9',
  transform: 'scale(0)',
});

const StyledRadio = styled(RadioGroupPrimitive.Item, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  display: 'flex',
  alignItems: 'center',
  borderRadius: '$2',
  boxShadow: 'inset 0 0 0 1px $colors$slate7',
  p: '$3',
  '@hover': {
    '&:hover': {
      boxShadow: 'inset 0 0 0 1px $colors$slate8',
    },
  },
  '&[data-state="checked"]': {
    boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8 !important',
    [`& ${StyledRadioIndicator}`]: {
      transform: 'scale(1)',
    },
  },
});

type RadioComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof RadioGroupPrimitive.Item>,
  RadioOwnProps
>;

export const RadioCard = React.forwardRef((props, forwardedRef) => (
  <StyledRadio {...props} ref={forwardedRef}>
    <StyledRadioButton>
      <StyledRadioIndicator />
    </StyledRadioButton>
    {props.children}
  </StyledRadio>
)) as RadioComponent;
