import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';
import { Text } from '../components/Text';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'a';

type LinkCSSProp = { css?: CSS };
type LinkVariants = StitchesVariants<typeof StyledLink>;
type LinkOwnProps = LinkCSSProp & LinkVariants;

const StyledLink = styled(DEFAULT_TAG, {
  flexShrink: 0,
  outline: 'none',
  textDecorationLine: 'none',
  textUnderlineOffset: '3px',
  textDecorationColor: '$slate300',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  lineHeight: 'inherit',
  '@hover': {
    '&:hover': {
      textDecorationLine: 'underline',
    },
  },
  '&:focus': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    textDecorationLine: 'none',
  },
  [`& ${Text}`]: {
    color: 'inherit',
  },
  variants: {
    variant: {
      blue: {
        color: '$blue900',
        textDecorationColor: '$blue300',
        '&:focus': {
          outlineColor: '$blue700',
        },
      },
      subtle: {
        color: '$slate900',
        textDecorationColor: '$slate300',
        '&:focus': {
          outlineColor: '$slate700',
        },
      },
      contrast: {
        color: '$hiContrast',
        textDecoration: 'underline',
        textDecorationColor: '$slate300',
        '@hover': {
          '&:hover': {
            textDecorationColor: '$slate600',
          },
        },
        '&:focus': {
          outlineColor: '$slate700',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'contrast',
  },
});

type LinkComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, LinkOwnProps>;

export const Link = React.forwardRef((props, forwardedRef) => {
  return <StyledLink {...props} ref={forwardedRef} />;
}) as LinkComponent;
