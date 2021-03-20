import React from 'react';
import { StyledText } from './Text';
import { StitchesVariants, CSS } from '../stitches.config';

import * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'h1';

type LargeHeadingCSSProp = { css?: CSS };
type LargeHeadingVariants = Omit<StitchesVariants<typeof StyledText>, 'size'>;
type LargeHeadingOwnProps = LargeHeadingCSSProp & LargeHeadingVariants;

type LargeHeadingComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  LargeHeadingOwnProps
>;

export const LargeHeading = React.forwardRef((props, forwardedRef) => (
  <StyledText
    as={DEFAULT_TAG}
    {...props}
    ref={forwardedRef}
    size={{
      '@initial': '7',
      '@bp2': '8',
    }}
    css={{
      fontWeight: 500,
      fontVariantNumeric: 'proportional-nums',
      lineHeight: '33px',
      ...(props.css as any),

      '@bp2': {
        lineHeight: '41px',
        ...(props.css?.['@bp2'] as any),
      },
    }}
  />
)) as LargeHeadingComponent;
