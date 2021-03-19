import React from 'react';
import { StyledText } from './Text';
import { StitchesVariants, CSS } from '../stitches.config';

import * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'h1';

type HeadingCSSProp = { css?: CSS };
type HeadingVariants = Omit<StitchesVariants<typeof StyledText>, 'size'>;
type HeadingOwnProps = HeadingCSSProp & HeadingVariants;

type HeadingComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, HeadingOwnProps>;

export const Heading = React.forwardRef((props, forwardedRef) => (
  <StyledText
    as={DEFAULT_TAG}
    {...props}
    ref={forwardedRef}
    size={{
      '@initial': '6',
      '@bp2': '7',
    }}
    css={{
      fontWeight: 500,
      fontVariantNumeric: 'proportional-nums',
      lineHeight: '25px',
      ...(props.css as any),

      '@bp2': {
        lineHeight: '30px',
        ...(props.css?.['@bp2'] as any),
      },
    }}
  />
)) as HeadingComponent;
