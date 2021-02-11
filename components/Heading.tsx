import React from 'react';
import { Text } from './Text';

import * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'h1';

type HeadingOwnProps = Omit<React.ComponentProps<typeof Text>, 'size'>;
type HeadingComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, HeadingOwnProps>;

export const Heading = React.forwardRef((props, forwardedRef) => (
  <Text
    as={DEFAULT_TAG}
    {...props}
    ref={forwardedRef}
    size={{
      initial: '6',
      bp2: '7',
    }}
    css={{
      fontWeight: 500,
      fontVariantNumeric: 'proportional-nums',
      lineHeight: '25px',
      ...(props.css as any),

      bp2: {
        lineHeight: '30px',
        ...(props.css?.bp2 as any),
      },
    }}
  />
)) as HeadingComponent;
