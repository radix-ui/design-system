import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';
import * as ToggleButtonPrimitive from '@radix-ui/react-toggle-button';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

type SimpleToggleCSSProp = { css?: CSS };
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
  backgroundColor: 'transparent',
  mixBlendMode: 'multiply',
  '@hover': {
    '&:hover': {
      backgroundColor: '$slate200',
    },
  },
  '&:active': {
    backgroundColor: '$slate300',
  },
  '&:focus': {
    boxShadow: 'inset 0 0 0 1px $slate700, 0 0 0 1px $slate700',
    zIndex: 1,
  },

  '&[data-state="on"]': {
    backgroundColor: '$slate400',
    '@hover': {
      '&:hover': {
        backgroundColor: '$slate400',
      },
    },
    '&:active': {
      backgroundColor: '$slate600',
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
