import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'div';

const StyledContainer = styled(DEFAULT_TAG, {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,

  // Custom
  ml: 'auto',
  mr: 'auto',
  px: '$5',

  variants: {
    size: {
      '1': {
        maxWidth: '430px',
      },
      '2': {
        maxWidth: '715px',
      },
      '3': {
        maxWidth: '1145px',
      },
      '4': {
        maxWidth: 'none',
      },
    },
  },
  defaultVariants: {
    size: '4',
  },
});

type ContainerCSSProp = { css?: CSS };
// TODO: Remove omit fix when this is merged https://github.com/modulz/stitches/issues/421
type ContainerVariants = Omit<StitchesVariants<typeof StyledContainer>, 'size'>;
type ContainerOwnProps = ContainerCSSProp & ContainerVariants & { size?: any };

type ContainerComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, ContainerOwnProps>;

export const Container = React.forwardRef((props, forwardedRef) => {
  return <StyledContainer {...props} ref={forwardedRef} />;
}) as ContainerComponent;
