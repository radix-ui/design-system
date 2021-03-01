import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'button';

const StyledButton = styled(DEFAULT_TAG, {
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

  // Custom
  border: 'none',
  borderRadius: '$2',
  height: '$5',
  px: '$2',
  fontFamily: '$untitled',
  fontSize: '$2',
  fontWeight: 500,
  fontVariantNumeric: 'tabular-nums',

  '&:disabled': {
    backgroundColor: '$gray100',
    boxShadow: 'inset 0 0 0 1px $colors$gray600',
    color: '$gray700',
    pointerEvents: 'none',
  },

  variants: {
    size: {
      '1': {
        height: '$5',
        px: '$2',
        fontSize: '$2',
      },
      '2': {
        height: '$6',
        px: '$3',
        fontSize: '$3',
      },
    },
    variant: {
      gray: {
        backgroundColor: '$loContrast',
        boxShadow: 'inset 0 0 0 1px $colors$gray600',
        color: '$hiContrast',
        '&:hover': {
          boxShadow: 'inset 0 0 0 1px $colors$gray700',
        },
        '&:active': {
          backgroundColor: '$gray100',
          boxShadow: 'inset 0 0 0 1px $colors$gray700',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$gray700, 0 0 0 1px $colors$gray700',
        },
        '&[data-state="open"]': {
          backgroundColor: '$gray300',
          boxShadow: 'inset 0 0 0 1px $colors$gray700',
        }
      },
      blue: {
        backgroundColor: '$blue100',
        boxShadow: 'inset 0 0 0 1px $colors$blue600',
        color: '$blue900',
        '&:hover': {
          boxShadow: 'inset 0 0 0 1px $colors$blue700',
        },
        '&:active': {
          backgroundColor: '$blue200',
          boxShadow: 'inset 0 0 0 1px $colors$blue700',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$blue700, 0 0 0 1px $colors$blue700',
        },
        '&[data-state="open"]': {
          backgroundColor: '$blue300',
          boxShadow: 'inset 0 0 0 1px $colors$blue700',
        }
      },
      green: {
        backgroundColor: '$green100',
        boxShadow: 'inset 0 0 0 1px $colors$green600',
        color: '$green900',
        '&:hover': {
          boxShadow: 'inset 0 0 0 1px $colors$green700',
        },
        '&:active': {
          backgroundColor: '$green200',
          boxShadow: 'inset 0 0 0 1px $colors$green700',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$green700, 0 0 0 1px $colors$green700',
        },
        '&[data-state="open"]': {
          backgroundColor: '$green300',
          boxShadow: 'inset 0 0 0 1px $colors$green700',
        }
      },
      red: {
        backgroundColor: '$loContrast',
        boxShadow: 'inset 0 0 0 1px $colors$gray600',
        color: '$red900',
        '&:hover': {
          boxShadow: 'inset 0 0 0 1px $colors$red700',
        },
        '&:active': {
          backgroundColor: '$red200',
          boxShadow: 'inset 0 0 0 1px $colors$red700',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$red700, 0 0 0 1px $colors$red700',
        },
        '&[data-state="open"]': {
          backgroundColor: '$red300',
          boxShadow: 'inset 0 0 0 1px $colors$red700',
        }
      },
      ghost: {
        backgroundColor: 'transparent',
        fontWeight: 400,
        '&:hover': {
          backgroundColor: '$gray200',
        },
        '&:active': {
          backgroundColor: '$gray300',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$gray700, 0 0 0 1px $colors$gray700',
        },
        '&[data-state="open"]': {
          backgroundColor: '$gray300',
        }
      },
      transparentWhite: {
        backgroundColor: 'hsla(0,100%,100%,.2)',
        color: 'white',
        '&:hover': {
          backgroundColor: 'hsla(0,100%,100%,.25)',
        },
        '&:active': {
          backgroundColor: 'hsla(0,100%,100%,.3)',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px hsla(0,100%,100%,.35), 0 0 0 1px hsla(0,100%,100%,.35)',
        },
      },
      transparentBlack: {
        backgroundColor: 'hsla(0,0%,0%,.2)',
        color: 'black',
        '&:hover': {
          backgroundColor: 'hsla(0,0%,0%,.25)',
        },
        '&:active': {
          backgroundColor: 'hsla(0,0%,0%,.3)',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px hsla(0,0%,0%,.35), 0 0 0 1px hsla(0,0%,0%,.35)',
        },
      },
    },
    state: {
      active: {
        backgroundColor: '$gray300',
        boxShadow: 'inset 0 0 0 1px $colors$gray700',
        color: '$gray900',
        '&:hover': {
          backgroundColor: '$gray400',
          boxShadow: 'inset 0 0 0 1px $colors$gray700',
        },
        '&:active': {
          backgroundColor: '$gray400',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$gray700, 0 0 0 1px $colors$gray700',
        },
      },
      waiting: {
        backgroundColor: '$gray300',
        boxShadow: 'inset 0 0 0 1px $colors$gray700',
        color: 'transparent',
        pointerEvents: 'none',
        '&:hover': {
          backgroundColor: '$gray400',
          boxShadow: 'inset 0 0 0 1px $colors$gray700',
        },
        '&:active': {
          backgroundColor: '$gray400',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$gray700',
        },
      },
    },
  },
  defaultVariants: {
    size: '1',
    variant: 'gray',
  }
});

type ButtonCSSProp = { css?: CSS };
// TODO: Remove omit fix when this is merged https://github.com/modulz/stitches/issues/421
type ButtonVariants = Omit<StitchesVariants<typeof StyledButton>, 'size'>;
type ButtonOwnProps = ButtonCSSProp & ButtonVariants & { size?: any };

type ButtonComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, ButtonOwnProps>;

export const Button = React.forwardRef((props, forwardedRef) => {
  return <StyledButton {...props} ref={forwardedRef} />;
}) as ButtonComponent;

Button.toString = () => `.${StyledButton.className}`;
