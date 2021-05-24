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
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Reset
  alignItems: 'center',
  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  backgroundColor: '$slate5',
  borderRadius: '$pill',
  position: 'relative',
  '&:focus': {
    boxShadow: '0 0 0 2px $colors$slate8',
  },

  '&[data-state="checked"]': {
    backgroundColor: '$blue9',
    '&:focus': {
      boxShadow: '0 0 0 2px $colors$blue8',
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
