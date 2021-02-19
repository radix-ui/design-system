import React from 'react';
import { Text } from './Text';

import * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'h2';

type SubtitleOwnProps = Omit<React.ComponentProps<typeof Text>, 'size'>;
type SubtitleComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, SubtitleOwnProps>;

export const Subtitle = React.forwardRef((props, forwardedRef) => (
  <Text
    as={DEFAULT_TAG}
    {...props}
    ref={forwardedRef}
    size={
      {
        initial: '5',
        bp2: '6',
      } as any // TODO: Fix when this is merged https://github.com/modulz/stitches/issues/421
    }
    css={{
      color: '$gray900',
      lineHeight: '27px',
      ...(props.css as any),

      bp2: {
        lineHeight: '30px',
        ...(props.css?.bp2 as any),
      },
    }}
  />
)) as SubtitleComponent;
