import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'span';

const StyledBadge = styled(DEFAULT_TAG, {
  // Reset
  alignItems: 'center',
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: 'inherit',
  justifyContent: 'center',
  lineHeight: '1',
  verticalAlign: 'middle',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&:disabled': {
    backgroundColor: '$slate200',
    pointerEvents: 'none',
    color: '$slate700',
  },
  '&::before': {
    boxSizing: 'border-box',
    content: '""',
  },
  '&::after': {
    boxSizing: 'border-box',
    content: '""',
  },

  // Custom
  backgroundColor: '$slate200',
  borderRadius: '$pill',
  color: '$slate900',
  whiteSpace: 'nowrap',
  fontVariantNumeric: 'tabular-nums',

  variants: {
    size: {
      '1': {
        height: '$4',
        px: '$1',
        fontSize: '$1',
      },
      '2': {
        height: '$5',
        px: '$2',
        fontSize: '$2',
      },
    },
    variant: {
      gray: {
        backgroundColor: '$slate200',
        color: '$slate900',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate700, 0 0 0 1px $colors$slate700',
        },
      },
      red: {
        backgroundColor: '$red200',
        color: '$red900',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$red700, 0 0 0 1px $colors$red700',
        },
      },
      crimson: {
        backgroundColor: '$crimson200',
        color: '$crimson900',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$crimson700, 0 0 0 1px $colors$crimson700',
        },
      },
      pink: {
        backgroundColor: '$pink200',
        color: '$pink900',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$pink700, 0 0 0 1px $colors$pink700',
        },
      },
      purple: {
        backgroundColor: '$purple200',
        color: '$purple900',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$purple700, 0 0 0 1px $colors$purple700',
        },
      },
      violet: {
        backgroundColor: '$violet200',
        color: '$violet900',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$violet700, 0 0 0 1px $colors$violet700',
        },
      },
      indigo: {
        backgroundColor: '$indigo200',
        color: '$indigo900',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$indigo700, 0 0 0 1px $colors$indigo700',
        },
      },
      blue: {
        backgroundColor: '$blue200',
        color: '$blue900',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$blue700, 0 0 0 1px $colors$blue700',
        },
      },
      cyan: {
        backgroundColor: '$cyan200',
        color: '$cyan900',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$cyan700, 0 0 0 1px $colors$cyan700',
        },
      },
      teal: {
        backgroundColor: '$teal200',
        color: '$teal900',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$teal700, 0 0 0 1px $colors$teal700',
        },
      },
      green: {
        backgroundColor: '$green200',
        color: '$green900',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$green700, 0 0 0 1px $colors$green700',
        },
      },
      lime: {
        backgroundColor: '$lime200',
        color: '$lime900',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$lime700, 0 0 0 1px $colors$lime700',
        },
      },
      yellow: {
        backgroundColor: '$yellow200',
        color: '$yellow900',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$yellow700, 0 0 0 1px $colors$yellow700',
        },
      },
      orange: {
        backgroundColor: '$orange200',
        color: '$orange900',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$orange700, 0 0 0 1px $colors$orange700',
        },
      },
      gold: {
        backgroundColor: '$gold200',
        color: '$gold900',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$gold700, 0 0 0 1px $colors$gold700',
        },
      },
      bronze: {
        backgroundColor: '$bronze200',
        color: '$bronze900',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$bronze700, 0 0 0 1px $colors$bronze700',
        },
      },
    },
    interactive: {
      true: {},
    },
  },

  compoundVariants: [
    {
      interactive: true,
      variant: 'red',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$red300',
          },
        },
        '&:active': {
          backgroundColor: '$red400',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$red400',
        },
      },
    },
    {
      interactive: true,
      variant: 'crimson',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$crimson300',
          },
        },
        '&:active': {
          backgroundColor: '$crimson400',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$crimson400',
        },
      },
    },
    {
      interactive: true,
      variant: 'pink',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$pink300',
          },
        },
        '&:active': {
          backgroundColor: '$pink400',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$pink400',
        },
      },
    },
    {
      interactive: true,
      variant: 'purple',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$purple300',
          },
        },
        '&:active': {
          backgroundColor: '$purple400',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$purple400',
        },
      },
    },
    {
      interactive: true,
      variant: 'violet',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$violet300',
          },
        },
        '&:active': {
          backgroundColor: '$violet400',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$violet400',
        },
      },
    },
    {
      interactive: true,
      variant: 'indigo',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$indigo300',
          },
        },
        '&:active': {
          backgroundColor: '$indigo400',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$indigo400',
        },
      },
    },
    {
      interactive: true,
      variant: 'blue',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$blue300',
          },
        },
        '&:active': {
          backgroundColor: '$blue400',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$blue400',
        },
      },
    },
    {
      interactive: true,
      variant: 'cyan',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$cyan300',
          },
        },
        '&:active': {
          backgroundColor: '$cyan400',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$cyan400',
        },
      },
    },
    {
      interactive: true,
      variant: 'teal',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$teal300',
          },
        },
        '&:active': {
          backgroundColor: '$teal400',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$teal400',
        },
      },
    },
    {
      interactive: true,
      variant: 'green',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$green300',
          },
        },
        '&:active': {
          backgroundColor: '$green400',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$green400',
        },
      },
    },
    {
      interactive: true,
      variant: 'lime',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$lime300',
          },
        },
        '&:active': {
          backgroundColor: '$lime400',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$lime400',
        },
      },
    },
    {
      interactive: true,
      variant: 'yellow',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$yellow300',
          },
        },
        '&:active': {
          backgroundColor: '$yellow400',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$yellow400',
        },
      },
    },
    {
      interactive: true,
      variant: 'orange',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$orange300',
          },
        },
        '&:active': {
          backgroundColor: '$orange400',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$orange400',
        },
      },
    },
    {
      interactive: true,
      variant: 'gold',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$gold300',
          },
        },
        '&:active': {
          backgroundColor: '$gold400',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$gold400',
        },
      },
    },
    {
      interactive: true,
      variant: 'bronze',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$bronze300',
          },
        },
        '&:active': {
          backgroundColor: '$bronze400',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$bronze400',
        },
      },
    },
  ],
  defaultVariants: {
    size: '1',
    variant: 'gray',
  },
});

type BadgeCSSProp = { css?: CSS };
// TODO: Remove omit fix when this is merged https://github.com/modulz/stitches/issues/421
type BadgeVariants = Omit<StitchesVariants<typeof StyledBadge>, 'size'>;
type BadgeOwnProps = BadgeCSSProp & BadgeVariants & { size?: any };

type BadgeComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, BadgeOwnProps>;

export const Badge = React.forwardRef((props, forwardedRef) => {
  return <StyledBadge {...props} ref={forwardedRef} />;
}) as BadgeComponent;
