import React from 'react';
import { styled } from '../stitches.config';
import { Flex } from '../components/Flex';
import { CheckIcon } from '@radix-ui/react-icons';

type VerifiedBadgeProps = React.ComponentProps<typeof StyledFlex>;

const StyledFlex = styled(Flex, {
  alignItems: 'center',
  backgroundColor: '$blue800',
  borderRadius: '$round',
  color: 'white',
  flexShrink: 0,
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
