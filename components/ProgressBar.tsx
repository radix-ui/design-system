import React from 'react';
import { styled, css, keyframes, CSS, StitchesVariants } from '../stitches.config';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const indeterminateProgress = keyframes({
  '0%': {
    transform: 'scaleX(1) translateX(-100%)',
    transformOrigin: 'left',
  },
  '50%': {
    transform: 'scaleX(1) translateX(1000%)',
    transformOrigin: 'left',
  },
  '100%': {
    transform: 'scaleX(1) translateX(2000%)',
    transformOrigin: 'left',
  },
});

const StyledProgressBar = styled(ProgressPrimitive.Root, {
  boxSizing: 'border-box',
  position: 'relative',
  height: '$1',
  overflow: 'hidden',
  borderRadius: '$pill',

  '&[data-state="indeterminate"]': {
    backgroundColor: '$slate300',
    '&::after': {
      animationName: indeterminateProgress,
      animationDuration: '1500ms',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'cubic-bezier(0.65, 0, 0.35, 1)',
      backgroundColor: '$slate600',
      boxSizing: 'border-box',
      borderRadius: '$pill',
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: '5%',
    },
  },

  variants: {
    variant: {
      gray: {
        background: '$slate700',
      },
      blue: {
        backgroundColor: '$blue800',
      },
      gradient: {
        backgroundImage:
          'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
      },
    },
  },
  defaultVariants: {
    variant: 'gray',
  },
});

const ProgressBarIndicator = styled(ProgressPrimitive.Indicator, {
  boxSizing: 'border-box',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: '$slate300',
  transition: 'transform 150ms cubic-bezier(0.65, 0, 0.35, 1)',
});

type ProgressBarCSSProp = { css?: CSS };
type ProgressBarVariants = StitchesVariants<typeof StyledProgressBar>;
type ProgressBarOwnProps = Polymorphic.OwnProps<typeof ProgressPrimitive.Root> &
  ProgressBarCSSProp &
  ProgressBarVariants;
type ProgressBarComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof ProgressPrimitive.Root>,
  ProgressBarOwnProps
>;

export const ProgressBar = React.forwardRef(({ value, max = 100, ...props }, forwardedRef) => {
  const percentage = value != null ? Math.round((value / max) * 100) : null;

  return (
    <StyledProgressBar {...props} ref={forwardedRef} value={value} max={max}>
      <ProgressBarIndicator style={{ transform: `translateX(${percentage}%)` }} />
    </StyledProgressBar>
  );
}) as ProgressBarComponent;
