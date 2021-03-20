import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

export const RadioGroup = styled(RadioGroupPrimitive.Root, {
  display: 'block',
});

const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    backgroundColor: '$blue800',
  },
});

const StyledRadio = styled(RadioGroupPrimitive.Item, {
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

  borderRadius: '50%',
  color: '$hiContrast',
  boxShadow: 'inset 0 0 0 1px $colors$slate600',
  overflow: 'hidden',
  '@hover': {
    '&:hover': {
      boxShadow: 'inset 0 0 0 1px $colors$slate700',
    },
  },
  '&:focus': {
    outline: 'none',
    borderColor: '$red600',
    boxShadow: 'inset 0 0 0 1px $colors$blue800, 0 0 0 1px $colors$blue800',
  },

  variants: {
    size: {
      '1': {
        width: '$3',
        height: '$3',
      },
      '2': {
        width: '$5',
        height: '$5',

        [`& ${StyledIndicator}`]: {
          '&::after': {
            width: '$3',
            height: '$3',
          },
        },
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
});

type RadioCSSProp = { css?: CSS };
// TODO: Remove omit fix when this is merged https://github.com/modulz/stitches/issues/421
type RadioVariants = Omit<StitchesVariants<typeof StyledRadio>, 'size'>;
type RadioOwnProps = Polymorphic.OwnProps<typeof RadioGroupPrimitive.Item> &
  RadioCSSProp &
  RadioVariants & { size?: any };

type RadioComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof RadioGroupPrimitive.Item>,
  RadioOwnProps
>;

export const Radio = React.forwardRef((props, forwardedRef) => (
  <StyledRadio {...props} ref={forwardedRef}>
    <StyledIndicator />
  </StyledRadio>
)) as RadioComponent;
