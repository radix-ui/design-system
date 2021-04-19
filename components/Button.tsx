import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'button';

const StyledButton = styled(DEFAULT_TAG, {
  // Reset
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom reset?
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // Custom
  borderRadius: '$buttonRadius',
  height: '$5',
  px: '$2',
  fontFamily: '$untitled',
  fontSize: '$2',
  fontWeight: 500,
  fontVariantNumeric: 'tabular-nums',

  '&:disabled': {
    backgroundColor: '$slate100',
    boxShadow: 'inset 0 0 0 1px $colors$slate600',
    color: '$slate700',
    pointerEvents: 'none',
  },

  variants: {
    size: {
      '1': {
        height: '$5',
        px: '$2',
        fontSize: '$2',
        lineHeight: '$sizes$5',
      },
      '2': {
        height: '$6',
        px: '$3',
        fontSize: '$3',
        lineHeight: '$sizes$6',
      },
    },
    variant: {
      gray: {
        backgroundColor: '$buttonBackgroundPlain',
        boxShadow: 'inset 0 0 0 1px $colors$buttonBorderColorPlain, $shadows$buttonShadow $colors$slate700',
        color: '$buttonColorPlain',
        '@hover': {
          '&:hover': {
            backgroundColor: '$buttonBackgroundPlainHover',
            boxShadow: 'inset 0 0 0 1px $colors$buttonBorderColorPlainHover, $shadows$buttonShadowHover $colors$slate700',
          },
        },
        '&:active': {
          backgroundColor: '$slate100',
          boxShadow: 'inset 0 0 0 1px $colors$slate700',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate700, 0 0 0 1px $colors$slate700',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$slate300',
          boxShadow: 'inset 0 0 0 1px $colors$slate700',
        },
      },
      blue: {
        backgroundColor: '$buttonBackgroundAccent',
        boxShadow: 'inset 0 0 0 1px $colors$buttonBorderColorAccent, $shadows$buttonShadow $colors$blue700',
        color: '$buttonColorAccent',
        '@hover': {
          '&:hover': {
            backgroundColor: '$buttonBackgroundAccentHover',
            boxShadow: 'inset 0 0 0 1px $colors$buttonBorderColorAccentHover, $shadows$buttonShadowHover $colors$blue700',
          },
        },
        '&:active': {
          backgroundColor: '$blue200',
          boxShadow: 'inset 0 0 0 1px $colors$blue700',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$blue700, 0 0 0 1px $colors$blue700',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$blue300',
          boxShadow: 'inset 0 0 0 1px $colors$blue700',
        },
      },
      green: {
        backgroundColor: '$buttonBackgroundPositive',
        boxShadow: 'inset 0 0 0 1px $colors$buttonBorderColorPositive, $shadows$buttonShadow $colors$green700',
        color: '$buttonColorPositive',
        '@hover': {
          '&:hover': {
            backgroundColor: '$buttonBackgroundPositiveHover',
            boxShadow: 'inset 0 0 0 1px $colors$buttonBorderColorPositiveHover, $shadows$buttonShadowHover $colors$green700',
          },
        },
        '&:active': {
          backgroundColor: '$green200',
          boxShadow: 'inset 0 0 0 1px $colors$green700',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$green700, 0 0 0 1px $colors$green700',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$green300',
          boxShadow: 'inset 0 0 0 1px $colors$green700',
        },
      },
      red: {
        backgroundColor: '$buttonBackgroundWarning',
        boxShadow: 'inset 0 0 0 1px $colors$buttonBorderColorWarning, $shadows$buttonShadow $colors$red700',
        color: '$buttonColorWarning',
        '@hover': {
          '&:hover': {
            backgroundColor: '$buttonBackgroundWarningHover',
            boxShadow: 'inset 0 0 0 1px $colors$buttonBorderColorWarningHover, $shadows$buttonShadowHover $colors$red700',
          },
        },
        '&:active': {
          backgroundColor: '$red200',
          boxShadow: 'inset 0 0 0 1px $colors$red700',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$red700, 0 0 0 1px $colors$red700',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$red300',
          boxShadow: 'inset 0 0 0 1px $colors$red700',
        },
      },
      ghost: {
        // mixBlendMode: 'multiply',
        // backgroundColor: 'transparent',
        // fontWeight: 400,
        // color: '$hiContrast',
        // '@hover': {
        //   '&:hover': {
        //     backgroundColor: '$slate200',
        //   },
        // },
        // '&:active': {
        //   backgroundColor: '$slate300',
        // },
        // '&:focus': {
        //   boxShadow: 'inset 0 0 0 1px $colors$slate700, 0 0 0 1px $colors$slate700',
        // },
        // '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
        //   backgroundColor: '$slate300',
        // },
      },
      transparentWhite: {
        backgroundColor: 'hsla(0,100%,100%,.2)',
        color: 'white',
        '@hover': {
          '&:hover': {
            backgroundColor: 'hsla(0,100%,100%,.25)',
          },
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
        '@hover': {
          '&:hover': {
            backgroundColor: 'hsla(0,0%,0%,.25)',
          },
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
        backgroundColor: '$slate300',
        boxShadow: 'inset 0 0 0 1px $colors$slate700',
        color: '$slate900',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slate400',
            boxShadow: 'inset 0 0 0 1px $colors$slate700',
          },
        },
        '&:active': {
          backgroundColor: '$slate400',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate700, 0 0 0 1px $colors$slate700',
        },
      },
      waiting: {
        backgroundColor: '$slate300',
        boxShadow: 'inset 0 0 0 1px $colors$slate700',
        color: 'transparent',
        pointerEvents: 'none',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slate400',
            boxShadow: 'inset 0 0 0 1px $colors$slate700',
          },
        },
        '&:active': {
          backgroundColor: '$slate400',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate700',
        },
      },
      ghost: {
        true: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        }
      }
    },
  },
  compoundVariants: [
    {
      variant: 'gray',
      ghost: 'true',
      css: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        color: '$hiContrast',
        '@hover': {
          '&:hover': {
            backgroundColor: '$loContrast',
          },
        },
        '&:active': {
          backgroundColor: '$slate300',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate700, 0 0 0 1px $colors$slate700',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$slate300',
        },
      },
    },
    {
      variant: 'blue',
      ghost: 'true',
      css: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        '@hover': {
          '&:hover': {
            backgroundColor: '$loContrast',
          },
        },
        '&:active': {
          backgroundColor: '$blue300',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$blue700, 0 0 0 1px $colors$blue700',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$blue300',
        },
      },
    },
    {
      variant: 'green',
      ghost: 'true',
      css: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        '@hover': {
          '&:hover': {
            backgroundColor: '$loContrast',
          },
        },
        '&:active': {
          backgroundColor: '$green300',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$green700, 0 0 0 1px $colors$green700',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$green300',
        },
      },
    },
    {
      variant: 'red',
      ghost: 'true',
      css: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        '@hover': {
          '&:hover': {
            backgroundColor: '$loContrast',
          },
        },
        '&:active': {
          backgroundColor: '$red300',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$red700, 0 0 0 1px $colors$red700',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$red300',
        },
      },
    },
  ],
  defaultVariants: {
    size: '1',
    variant: 'gray',
  },
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
