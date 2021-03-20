import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'textarea';

type TextareaCSSProp = { css?: CSS };
type TextareaVariants = StitchesVariants<typeof StyledTextarea>;
type TextareaOwnProps = TextareaCSSProp & TextareaVariants;

const StyledTextarea = styled(DEFAULT_TAG, {
  // Reset
  appearance: 'none',
  borderWidth: '0',
  fontFamily: 'inherit',
  margin: '0',
  outline: 'none',
  padding: '$1',
  width: '100%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  backgroundColor: '$loContrast',
  boxShadow: 'inset 0 0 0 1px $colors$slate600',
  borderRadius: '$2',
  color: '$hiContrast',
  fontVariantNumeric: 'tabular-nums',
  position: 'relative',
  minHeight: 80,
  resize: 'vertical',

  '&:focus': {
    boxShadow: 'inset 0px 0px 0px 1px $colors$blue700, 0px 0px 0px 1px $colors$blue700',
    zIndex: '1',
  },
  '&::placeholder': {
    color: '$slate800',
  },
  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: '$slate100',
    color: '$slate700',
    cursor: 'not-allowed',
    resize: 'none',
    '&::placeholder': {
      color: '$slate600',
    },
  },
  '&:read-only': {
    backgroundColor: '$slate100',
    '&:focus': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$slate600',
    },
  },

  variants: {
    size: {
      '1': {
        fontSize: '$1',
        lineHeight: '16px',
        px: '$1',
      },
      '2': {
        fontSize: '$2',
        lineHeight: '20px',
        px: '$1',
      },
      '3': {
        fontSize: '$3',
        lineHeight: '23px',
        px: '$2',
      },
    },
    state: {
      invalid: {
        boxShadow: 'inset 0 0 0 1px $colors$red600',
        '&:focus': {
          boxShadow: 'inset 0px 0px 0px 1px $colors$red700, 0px 0px 0px 1px $colors$red700',
        },
      },
      valid: {
        boxShadow: 'inset 0 0 0 1px $colors$green600',
        '&:focus': {
          boxShadow: 'inset 0px 0px 0px 1px $colors$green700, 0px 0px 0px 1px $colors$green700',
        },
      },
    },
    cursor: {
      default: {
        cursor: 'default',
        '&:focus': {
          cursor: 'text',
        },
      },
      text: {
        cursor: 'text',
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
});

type TextareaComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, TextareaOwnProps>;

export const Textarea = React.forwardRef((props, forwardedRef) => {
  return <StyledTextarea {...props} ref={forwardedRef} />;
}) as TextareaComponent;
