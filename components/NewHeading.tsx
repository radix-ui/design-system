import React from 'react';
import { StyledText } from './Text';
import { StitchesVariants, CSS } from '../stitches.config';

import * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'h1';

type TextSizeVariants = Pick<StitchesVariants<typeof StyledText>, 'size'>;

type NewHeadingCSSProp = { css?: CSS };
type NewHeadingSizeVariants = '1' | '2' | '3' | '4';
type NewHeadingVariants = { size?: NewHeadingSizeVariants } & Omit<
  StitchesVariants<typeof StyledText>,
  'size'
>;
type NewHeadingOwnProps = NewHeadingCSSProp & NewHeadingVariants;
type NewHeadingComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, NewHeadingOwnProps>;

export const NewHeading = React.forwardRef((props, forwardedRef) => {
  // '2' here is the default Newheading size variant
  const { size = '2', ...textProps } = props;
  // This is the mapping of NewHeading Variants to Text variants
  const textSize: Record<NewHeadingSizeVariants, TextSizeVariants['size']> = {
    1: { '@initial': '1', '@bp2': '2' },
    2: { '@initial': '2', '@bp2': '3' },
    3: { '@initial': '3', '@bp2': '4' },
    4: { '@initial': '4', '@bp2': '5' },
  };
  // This is the mapping of NewHeading Variants to Text css
  const textCss: Record<NewHeadingSizeVariants, CSS> = {
    1: { lineHeight: '25px' },
    2: { lineHeight: '35px' },
    3: { lineHeight: '45px' },
    4: { lineHeight: '55px' },
  };
  return (
    <StyledText
      as={DEFAULT_TAG}
      {...textProps}
      ref={forwardedRef}
      size={textSize[size]}
      css={{
        fontWeight: 500,
        fontVariantNumeric: 'proportional-nums',
        ...textCss[size],
        ...(props.css as any),
      }}
    />
  );
}) as NewHeadingComponent;
