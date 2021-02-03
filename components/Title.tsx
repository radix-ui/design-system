import React from 'react';
import { Text } from './Text';

import * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'h1';

type TitleOwnProps = Omit<React.ComponentProps<typeof Text>, 'size'>;
type TitleComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, TitleOwnProps>;

export const Title = React.forwardRef((props, forwardedRef) => (
  <Text
    as={DEFAULT_TAG}
    {...props}
    ref={forwardedRef}
    size={{
      initial: '8',
      bp2: '9',
    }}
    css={{
      fontWeight: 500,
      fontVariantNumeric: 'proportional-nums',
      lineHeight: '35px',
      ...(props.css as any),

      bp2: {
        lineHeight: '55px',
        ...(props.css?.bp2 as any),
      },
    }}
  />
)) as TitleComponent;
