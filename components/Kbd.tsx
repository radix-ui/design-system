import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'span';

const StyledKbd = styled('kbd', {
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$loContrast',
  borderRadius: '$1',
  flexShrink: 0,
  color: '$hiContrast',
  userSelect: 'none',
  cursor: 'default',
  whiteSpace: 'nowrap',
  boxShadow: `
    inset 0 0.5px rgba(255, 255, 255, 0.1),
    inset 0 1px 5px $colors$slate100,
    0px 0px 0px 0.5px $colors$slate700,
    0px 2px 1px -1px $colors$slate700,
    0 1px $colors$slate700`,
  textShadow: '0 0 1px rgba(255, 255, 255, 0.5)',
  fontFamily: 'inherit',
  fontWeight: 400,
  lineHeight: '1.5',
  mx: '2px',

  variants: {
    size: {
      '1': {
        px: '0.3em',
        height: '$3',
        minWidth: '1.6em',
        fontSize: '$1',
        lineHeight: '15px',
      },
      '2': {
        px: '0.5em',
        height: '$5',
        minWidth: '2em',
        fontSize: '$2',
        lineHeight: '25px',
      },
    },
    width: {
      shift: {
        width: '4em',
        justifyContent: 'flex-start',
      },
      command: {
        width: '3em',
        justifyContent: 'flex-end',
      },
      space: {
        width: '8em',
      },
    },
  },

  compoundVariants: [
    {
      size: '1',
      width: 'shift',
      css: {
        width: '3em',
      },
    },
    {
      size: '1',
      width: 'command',
      css: {
        width: '2.5em',
      },
    },
    {
      size: '1',
      width: 'space',
      css: {
        width: '5em',
      },
    },
  ],

  defaultVariants: {
    size: '2',
  },
});

type KbdCSSProp = { css?: CSS };
// TODO: Remove omit fix when this is merged https://github.com/modulz/stitches/issues/421
type KbdVariants = Omit<StitchesVariants<typeof StyledKbd>, 'size'>;
type KbdOwnProps = KbdCSSProp & KbdVariants & { size?: any };

type KbdComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, KbdOwnProps>;

export const Kbd = React.forwardRef((props, forwardedRef) => {
  return <StyledKbd {...props} ref={forwardedRef} />;
}) as KbdComponent;
