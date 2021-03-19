import React from 'react';
import { StyledText } from './Text';
import { StitchesVariants, CSS } from '../stitches.config';

import * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'h1';

type TitleCSSProp = { css?: CSS };
type TitleVariants = Omit<StitchesVariants<typeof StyledText>, 'size'>;
type TitleOwnProps = TitleCSSProp & TitleVariants;

type TitleComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, TitleOwnProps>;

export const Title = React.forwardRef((props, forwardedRef) => (
  <StyledText
    as={DEFAULT_TAG}
    {...props}
    ref={forwardedRef}
    size={{
      '@initial': '8',
      '@bp2': '9',
    }}
    css={{
      fontWeight: 500,
      fontVariantNumeric: 'proportional-nums',
      lineHeight: '35px',
      ...(props.css as any),

      '@bp2': {
        lineHeight: '55px',
        ...(props.css?.['@bp2'] as any),
      },
    }}
  />
)) as TitleComponent;
