import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'div';

const StyledStatus = styled(DEFAULT_TAG, {
  borderRadius: '50%',
  flexShrink: 0,

  variants: {
    size: {
      '1': {
        width: 5,
        height: 5,
      },
      '2': {
        width: 9,
        height: 9,
      },
    },
    variant: {
      gray: {
        backgroundColor: '$slate7',
      },
      blue: {
        backgroundColor: '$blue9',
      },
      green: {
        backgroundColor: '$green9',
      },
      yellow: {
        backgroundColor: '$yellow9',
      },
      red: {
        backgroundColor: '$red9',
      },
    },
  },
  defaultVariants: {
    size: '2',
    variant: 'gray',
  },
});

type StatusCSSProp = { css?: CSS };
// TODO: Remove omit fix when this is merged https://github.com/modulz/stitches/issues/421
type StatusVariants = Omit<StitchesVariants<typeof StyledStatus>, 'size'>;
type StatusOwnProps = StatusCSSProp & StatusVariants & { size?: any };

type StatusComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, StatusOwnProps>;

export const Status = React.forwardRef((props, forwardedRef) => {
  return <StyledStatus {...props} ref={forwardedRef} />;
}) as StatusComponent;
