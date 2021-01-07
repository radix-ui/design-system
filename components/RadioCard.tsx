import React from 'react';
import { styled, StitchesProps, StitchesVariants } from '../stitches.config';
import {
  RadioGroup as RadioGroupPrimitive,
  RadioGroupProps as RadioGroupPrimitiveProps,
  RadioGroupItemProps,
} from '@interop-ui/react-radio-group';
import { CheckIcon } from '@modulz/radix-icons';

export type RadioGroupProps = RadioGroupPrimitiveProps;
export type RadioCardProps = RadioGroupItemProps & StitchesProps<typeof StyledRadio> & RadioCardVariants;
export type RadioCardVariants = StitchesVariants<typeof StyledRadio>;

export function RadioGroup(props: RadioGroupPrimitiveProps) {
  return <RadioGroupPrimitive {...props} />;
}

const StyledRadioButton = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$round',
  width: 25,
  height: 25,
  boxShadow: 'inset 0 0 0 1px $gray600',
  flexShrink: 0,
  mr: '$3',
});

const StyledRadioIndicator = styled('div', {
  borderRadius: '$round',
  width: 15,
  height: 15,
  backgroundColor: '$blue800',
  transform: 'scale(0)',
});

const StyledRadio = styled(RadioGroupPrimitive.Item, {
  borderRadius: '$2',
  boxShadow: 'inset 0 0 0 1px $gray600',
  p: '$3',

  ':hover': {
    boxShadow: 'inset 0 0 0 1px $gray700',
  },

  '&[data-state="checked"]': {
    boxShadow: 'inset 0 0 0 1px $blue700, 0 0 0 1px $blue700 !important',
    [`& ${StyledRadioIndicator}`]: {
      transform: 'scale(1)',
    },
  },
});

export function RadioCard({ ...props }: RadioCardProps) {
  return (
    <StyledRadio {...props}>
      <StyledRadioButton>
        <StyledRadioIndicator />
      </StyledRadioButton>
      {props.children}
    </StyledRadio>
  );
}

RadioCard.Radio = RadioCard;
