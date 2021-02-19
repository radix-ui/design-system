import React from 'react';
import { Text } from './Text';

import * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'h4';

type SubheadingOwnProps = Omit<React.ComponentProps<typeof Text>, 'size'>;
type SubheadingComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, SubheadingOwnProps>;

export const Subheading = React.forwardRef((props, forwardedRef) => (
  <Text
    as={DEFAULT_TAG}
    {...props}
    ref={forwardedRef}
    size={
      {
        initial: '4',
        bp2: '5',
      } as any // TODO: Fix when this is merged https://github.com/modulz/stitches/issues/421
    }
    css={{
      fontWeight: 500,
      fontVariantNumeric: 'proportional-nums',
      lineHeight: '20px',
      ...(props.css as any),

      bp2: {
        lineHeight: '23px',
        ...(props.css?.bp2 as any),
      },
    }}
  />
)) as SubheadingComponent;
