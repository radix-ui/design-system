import React from 'react';
import { Text } from './Text';

import * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'p';

type ParagraphOwnProps = Omit<React.ComponentProps<typeof Text>, 'size'>;
type ParagraphComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, ParagraphOwnProps>;

export const Paragraph = React.forwardRef((props, forwardedRef) => (
  <Text
    as={DEFAULT_TAG}
    {...props}
    ref={forwardedRef}
    size={{
      initial: '3',
      bp2: '4',
    }}
    css={{
      lineHeight: '25px',
      ...(props.css as any),

      bp2: {
        lineHeight: '27px',
        ...(props.css?.bp2 as any),
      },
    }}
  />
)) as ParagraphComponent;
