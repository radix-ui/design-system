import React from 'react';
import { styled, StitchesVariants, CSS } from '../stitches.config';
import * as SwitchPrimitive from '@radix-ui/react-switch';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  position: 'absolute',
  left: 0,
  width: 13,
  height: 13,
  backgroundColor: 'white',
  borderRadius: '$round',
  boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 1px 2px;',
  transition: 'transform 100ms cubic-bezier(0.22, 1, 0.36, 1)',
  transform: 'translateX(1px)',
  willChange: 'transform',

  '&[data-state="checked"]': {
    transform: 'translateX(11px)',
  },
});

const StyledSwitch = styled(SwitchPrimitive.Root, {
  // Reset
  alignItems: 'center',
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  backgroundColor: '$slate400',
  borderRadius: '$pill',
  position: 'relative',
  '&:focus': {
    boxShadow: '0 0 0 2px $colors$slate700',
  },

  '&[data-state="checked"]': {
    backgroundColor: '$blue800',
    '&:focus': {
      boxShadow: '0 0 0 2px $colors$blue700',
    },
  },

  variants: {
    size: {
      '1': {
        width: '$5',
        height: '$3',
      },
      '2': {
        width: '$7',
        height: '$5',
        [`& ${StyledThumb}`]: {
          width: 21,
          height: 21,
          transform: 'translateX(2px)',
          '&[data-state="checked"]': {
            transform: 'translateX(22px)',
          },
        },
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
});

type ButtonCSSProp = { css?: CSS };
type SwitchVariants = StitchesVariants<typeof StyledSwitch>;
type SwitchOwnProps = Polymorphic.OwnProps<typeof SwitchPrimitive.Root> &
  ButtonCSSProp &
  SwitchVariants;
type SwitchComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof SwitchPrimitive.Root>,
  SwitchOwnProps
>;

export const Switch = React.forwardRef((props, forwardedRef) => (
  <StyledSwitch {...props} ref={forwardedRef}>
    <StyledThumb />
  </StyledSwitch>
)) as SwitchComponent;
