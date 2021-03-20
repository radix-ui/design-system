import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'a';

type TabLinkCSSProp = { css?: CSS };
type TabLinkVariants = StitchesVariants<typeof StyledTabLink>;
type TabLinkOwnProps = TabLinkCSSProp & TabLinkVariants;

const StyledTabLink = styled(DEFAULT_TAG, {
  position: 'relative',
  flexShrink: 0,
  height: '$6',
  display: 'inline-flex',
  lineHeight: 1,
  fontSize: '$1',
  px: '$3',
  userSelect: 'none',
  outline: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$slate900',
  textDecoration: 'none',
  '@hover': {
    '&:hover': {
      color: '$hiContrast',
    },
  },
  '&:focus': {
    boxShadow: 'inset 0 0 0 1px $colors$slate700, 0 0 0 1px $colors$slate700',
  },

  variants: {
    active: {
      true: {
        color: '$hiContrast',
        cursor: 'default',
        '&::after': {
          position: 'absolute',
          content: '""',
          left: 0,
          bottom: 0,
          width: '100%',
          height: 2,
          backgroundColor: '$blue800',
        },
      },
    },
  },
});

type TabLinkComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, TabLinkOwnProps>;

export const TabLink = React.forwardRef((props, forwardedRef) => {
  return <StyledTabLink {...props} ref={forwardedRef} />;
}) as TabLinkComponent;
