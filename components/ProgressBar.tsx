import React from 'react';
import { styled, css, StitchesProps, StitchesVariants } from '../stitches.config';
import {
  ProgressBar as ProgressBarPrimitive,
  ProgressBarProps as ProgressBarPrimitiveProps,
} from '@interop-ui/react-progress-bar';

export type ProgressBarProps = ProgressBarPrimitiveProps & StitchesProps<typeof StyledProgressBar>;
export type ProgressBarVariants = StitchesVariants<typeof StyledProgressBar>;

const indeterminateProgress = css.keyframes({
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

const StyledProgressBar = styled(ProgressBarPrimitive, {
  boxSizing: 'border-box',
  position: 'relative',
  height: '$1',
  overflow: 'hidden',
  borderRadius: '$pill',
  background: '$gray700',

  '&[data-state="indeterminate"]': {
    backgroundColor: '$gray300',
    '::after': {
      animationName: indeterminateProgress,
      animationDuration: '1500ms',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'cubic-bezier(0.65, 0, 0.35, 1)',
      backgroundColor: '$gray600',
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

  '&[data-state="complete"]': {
    backgroundColor: '$green800',
    backgroundImage: 'none',
  },

  variants: {
    color: {
      blue: {
        backgroundColor: '$blue800',
      },
      gradient: {
        backgroundImage:
          'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
      },
    },
  },
});

const ProgressBarIndicator = styled(ProgressBarPrimitive.Indicator, {
  boxSizing: 'border-box',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: '$gray300',
  transition: 'transform 150ms cubic-bezier(0.65, 0, 0.35, 1)',
});

export function ProgressBar({ value, max = 100, ...props }: ProgressBarProps) {
  const percentage = value != null ? Math.round((value / max) * 100) : null;

  return (
    <div>
      <StyledProgressBar {...props} value={value} max={max}>
        <ProgressBarIndicator style={{ transform: `translateX(${percentage}%)` }} />
      </StyledProgressBar>
    </div>
  );
}
