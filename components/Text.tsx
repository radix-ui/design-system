import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'span';

export const StyledText = styled(DEFAULT_TAG, {
  // Reset
  lineHeight: '1',
  margin: '0',
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  variants: {
    size: {
      '1': {
        fontSize: '$1',
      },
      '2': {
        fontSize: '$2',
      },
      '3': {
        fontSize: '$3',
      },
      '4': {
        fontSize: '$4',
      },
      '5': {
        fontSize: '$5',
        letterSpacing: '-.015em',
      },
      '6': {
        fontSize: '$6',
        letterSpacing: '-.016em',
      },
      '7': {
        fontSize: '$7',
        letterSpacing: '-.031em',
        textIndent: '-.005em',
      },
      '8': {
        fontSize: '$8',
        letterSpacing: '-.034em',
        textIndent: '-.018em',
      },
      '9': {
        fontSize: '$9',
        letterSpacing: '-.055em',
        textIndent: '-.025em',
      },
    },
    variant: {
      red: {
        color: '$red900',
      },
      crimson: {
        color: '$crimson900',
      },
      pink: {
        color: '$pink900',
      },
      purple: {
        color: '$purple900',
      },
      violet: {
        color: '$violet900',
      },
      indigo: {
        color: '$indigo900',
      },
      blue: {
        color: '$blue900',
      },
      cyan: {
        color: '$cyan900',
      },
      teal: {
        color: '$teal900',
      },
      green: {
        color: '$green900',
      },
      lime: {
        color: '$lime900',
      },
      yellow: {
        color: '$yellow900',
      },
      orange: {
        color: '$orange900',
      },
      gold: {
        color: '$gold900',
      },
      bronze: {
        color: '$bronze900',
      },
      gray: {
        color: '$slate900',
      },
      contrast: {
        color: '$hiContrast',
      },
    },
    gradient: {
      true: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }
    }
  },
  compoundVariants: [
    {
      variant: 'red',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $red900, $crimson900)',
      },
    },
    {
      variant: 'crimson',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $crimson900, $pink900)',
      },
    },
    {
      variant: 'pink',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $pink900, $purple900)',
      },
    },
    {
      variant: 'purple',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $purple900, $violet900)',
      },
    },
    {
      variant: 'violet',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $violet900, $indigo900)',
      },
    },
    {
      variant: 'indigo',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $indigo900, $blue900)',
      },
    },
    {
      variant: 'blue',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $blue900, $cyan900)',
      },
    },
    {
      variant: 'cyan',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $cyan900, $teal900)',
      },
    },
    {
      variant: 'teal',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $teal900, $green900)',
      },
    },
    {
      variant: 'green',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $green900, $lime900)',
      },
    },
    {
      variant: 'lime',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $lime900, $yellow900)',
      },
    },
    {
      variant: 'yellow',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $yellow900, $orange900)',
      },
    },
    {
      variant: 'orange',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $orange900, $red900)',
      },
    },
    {
      variant: 'gold',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $gold900, $gold800)',
      },
    },
    {
      variant: 'bronze',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $bronze900, $bronze800)',
      },
    },
    {
      variant: 'gray',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $gray900, $gray1000)',
      },
    },
    {
      variant: 'contrast',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $hiContrast, $gray1000)',
      },
    },
  ],
  defaultVariants: {
    size: '3',
    variant: 'contrast',
  },
});

type TextCSSProp = { css?: CSS };
// TODO: Remove omit fix when this is merged https://github.com/modulz/stitches/issues/421
type TextVariants = Omit<StitchesVariants<typeof StyledText>, 'size'>;
type TextOwnProps = TextCSSProp & TextVariants & { size?: any };

type TextComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, TextOwnProps>;

export const Text = React.forwardRef((props, forwardedRef) => {
  return <StyledText {...props} ref={forwardedRef} />;
}) as TextComponent;

Text.toString = () => `.${StyledText.className}`;
