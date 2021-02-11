import React from 'react';
import { styled, StitchesProps, StitchesVariants } from '../stitches.config';
import * as ToggleButtonPrimitive from '@radix-ui/react-toggle-button';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

type SimpleToggleCSSProp = Pick<StitchesProps<typeof StyledSimpleToggle>, 'css'>;
type SimpleToggleVariants = StitchesVariants<typeof StyledSimpleToggle>;
type SimpleToggleOwnProps = Polymorphic.OwnProps<typeof ToggleButtonPrimitive.Root> &
  SimpleToggleCSSProp &
  SimpleToggleVariants;

const StyledSimpleToggle = styled(ToggleButtonPrimitive.Root, {
  // Reset
  alignItems: 'center',
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: 'inherit',
  fontSize: '14px',
  justifyContent: 'center',
  lineHeight: '1',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  color: '$hiContrast',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  height: '$5',
  width: '$5',
  transition: 'all 40ms linear',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: '$gray200',
  },
  '&:active': {
    backgroundColor: '$gray300',
  },
  '&:focus': {
    boxShadow: 'inset 0 0 0 1px $gray700, 0 0 0 1px $gray700',
    zIndex: 1,
  },

  '&[data-state="on"]': {
    backgroundColor: '$gray400',
    '&:hover': {
      backgroundColor: '$gray400',
    },
    '&:active': {
      backgroundColor: '$gray600',
    },
  },

  variants: {
    shape: {
      circle: {
        borderRadius: '$round',
      },
      square: {
        borderRadius: '$1',
      },
    },
  },
});

type SimpleToggleComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof ToggleButtonPrimitive.Root>,
  SimpleToggleOwnProps
>;

export const SimpleToggle = React.forwardRef((props, forwardedRef) => (
  <StyledSimpleToggle {...props} ref={forwardedRef} />
)) as SimpleToggleComponent;
