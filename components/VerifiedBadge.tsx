import React from 'react';
import { styled, StitchesProps } from '../stitches.config';
import { Flex } from '../components/Flex';
import { CheckIcon } from '@modulz/radix-icons';

type VerifiedBadgeProps = StitchesProps<typeof StyledFlex>;

const StyledFlex = styled(Flex, {
  alignItems: 'center',
  backgroundColor: '$blue800',
  borderRadius: '$round',
  color: 'white',
  justifyContent: 'center',
  width: '$3',
  height: '$3',
});

export function VerifiedBadge(props: VerifiedBadgeProps) {
  return (
    <StyledFlex {...props}>
      <CheckIcon />
    </StyledFlex>
  );
}
