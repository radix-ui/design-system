import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'button';

type IconButtonCSSProp = { css?: CSS };
type IconButtonVariants = StitchesVariants<typeof StyledIconButton>;
type IconButtonOwnProps = IconButtonCSSProp & IconButtonVariants;

const StyledIconButton = styled(DEFAULT_TAG, {
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
  backgroundColor: '$loContrast',
  border: '1px solid $slate600',
  borderRadius: '$2',
  '@hover': {
    '&:hover': {
      borderColor: '$slate700',
    },
  },
  '&:active': {
    backgroundColor: '$slate100',
  },
  '&:focus': {
    borderColor: '$slate700',
    boxShadow: '0 0 0 1px $colors$slate700',
  },
  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: 'transparent',
    color: '$slate500',
  },

  variants: {
    size: {
      '1': {
        height: '$5',
        width: '$5',
      },
      '2': {
        height: '$6',
        width: '$6',
      },
      '3': {
        height: '$7',
        width: '$7',
      },
      '4': {
        height: '$8',
        width: '$8',
      },
    },
    variant: {
      ghost: {
        mixBlendMode: 'multiply',
        backgroundColor: 'transparent',
        borderWidth: '0',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slate200',
          },
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate700, 0 0 0 1px $colors$slate700',
        },
        '&:active': {
          backgroundColor: '$slate300',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$slate300',
        },
      },
      raised: {
        boxShadow:
          '0 0 transparent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',
        '@hover': {
          '&:hover': {
            boxShadow:
              '0 0 transparent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',
          },
        },
        '&:focus': {
          borderColor: '$slate700',
          boxShadow:
            '0 0 0 1px $colors$slate700, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',
        },
        '&:active': {
          backgroundColor: '$slate300',
        },
      },
    },
    state: {
      active: {
        backgroundColor: '$slate300',
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
          },
        },
        '&:active': {
          backgroundColor: '$slate300',
        },
      },
      waiting: {
        backgroundColor: '$slate300',
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
          },
        },
        '&:active': {
          backgroundColor: '$slate300',
        },
      },
    },
  },
  defaultVariants: {
    size: '1',
    variant: 'ghost',
  },
});

type IconButtonComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, IconButtonOwnProps>;

export const IconButton = React.forwardRef((props, forwardedRef) => {
  return <StyledIconButton {...props} ref={forwardedRef} />;
}) as IconButtonComponent;
