import React from 'react';
import { StyledText } from './Text';
import { StitchesVariants, CSS } from '../stitches.config';

import * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'p';

type ParagraphCSSProp = { css?: CSS };
type ParagraphVariants = Omit<StitchesVariants<typeof StyledText>, 'size'>;
type ParagraphOwnProps = ParagraphCSSProp & ParagraphVariants;

type ParagraphComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, ParagraphOwnProps>;

export const Paragraph = React.forwardRef((props, forwardedRef) => (
  <StyledText
    as={DEFAULT_TAG}
    {...props}
    ref={forwardedRef}
    size={
      {
        initial: '3',
        bp2: '4',
      } as any // TODO: Fix when this is merged https://github.com/modulz/stitches/issues/421
    }
    css={{
      lineHeight: '25px',
      ...(props.css as any),

      when: {
        ...(props.css?.when as any),
        bp2: {
          lineHeight: '27px',
          ...(props.css?.when?.bp2 as any),
        },
      },
    }}
  />
)) as ParagraphComponent;
