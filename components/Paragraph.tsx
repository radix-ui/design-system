import React from 'react';
import { StyledText } from './Text';
import { StitchesVariants, CSS } from '../stitches.config';

import * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'p';

type TextSizeVariants = Pick<StitchesVariants<typeof StyledText>, 'size'>;

type ParagraphCSSProp = { css?: CSS };
type ParagraphSizeVariants = '1' | '2';
type ParagraphVariants = { size?: ParagraphSizeVariants } & Omit<
  StitchesVariants<typeof StyledText>,
  'size'
>;
type ParagraphOwnProps = ParagraphCSSProp & ParagraphVariants;
type ParagraphComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, ParagraphOwnProps>;

export const Paragraph = React.forwardRef((props, forwardedRef) => {
  // '2' here is the default Paragraph size variant
  const { size = '1', ...textProps } = props;
  // This is the mapping of Paragraph Variants to Text variants
  const textSize: Record<ParagraphSizeVariants, TextSizeVariants['size']> = {
    1: { '@initial': '3', '@bp2': '4' },
    2: { '@initial': '5', '@bp2': '6' },
  };
  // This is the mapping of Paragraph Variants to Text css
  const textCss: Record<ParagraphSizeVariants, CSS> = {
    1: { lineHeight: '25px', '@bp2': { lineHeight: '27px' } },
    2: { color: '$slate11', lineHeight: '27px', '@bp2': { lineHeight: '30px' } },
  };
  return (
    <StyledText
      as={DEFAULT_TAG}
      {...textProps}
      ref={forwardedRef}
      size={textSize[size]}
      css={{
        ...textCss[size],
        ...(props.css as any),
      }}
    />
  );
}) as ParagraphComponent;
