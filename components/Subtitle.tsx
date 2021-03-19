import React from 'react';
import { StyledText } from './Text';
import { StitchesVariants, CSS } from '../stitches.config';

import * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'h2';

type SubtitleCSSProp = { css?: CSS };
type SubtitleVariants = Omit<StitchesVariants<typeof StyledText>, 'size'>;
type SubtitleOwnProps = SubtitleCSSProp & SubtitleVariants;

type SubtitleComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, SubtitleOwnProps>;

export const Subtitle = React.forwardRef((props, forwardedRef) => (
  <StyledText
    as={DEFAULT_TAG}
    {...props}
    ref={forwardedRef}
    size={{
      '@initial': '5',
      '@bp2': '6',
    }}
    css={{
      color: '$slate900',
      lineHeight: '27px',
      ...(props.css as any),

      '@bp2': {
        lineHeight: '30px',
        ...(props.css?.['@bp2'] as any),
      },
    }}
  />
)) as SubtitleComponent;
