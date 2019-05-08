import React, { FC, ComponentPropsWithRef } from 'react';
import styled from 'styled-components';
import {
  color,
  ColorProps,
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  letterSpacing,
  LetterSpacingProps,
  lineHeight,
  LineHeightProps,
  overflow,
  OverflowProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  themeGet,
  style,
  ResponsiveValue,
} from 'styled-system';
import { getPropsFromScale } from '../utils/utils';
import * as CSS from 'csstype';

const whiteSpace = style({
  prop: 'whiteSpace',
});

interface WhiteSpaceProps {
  whiteSpace?: ResponsiveValue<CSS.WhiteSpaceProperty>;
}

const textOverflow = style({
  prop: 'textOverflow',
});

interface TextOverflowProperty {
  textOverflow?: ResponsiveValue<CSS.TextOverflowProperty>;
}

type SystemHeadingProps = FontFamilyProps &
  FontSizeProps &
  FontWeightProps &
  LetterSpacingProps &
  LineHeightProps &
  OverflowProps &
  SpaceProps &
  TextAlignProps &
  TextOverflowProperty &
  WhiteSpaceProps &
  ColorProps;

export const SystemHeading = styled.h1<SystemHeadingProps>`
  color: ${themeGet('colors.grays.8')};
  margin: 0;
  line-height: 1.1;

  ${color}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${letterSpacing}
  ${lineHeight}
  ${overflow}
  ${space}
  ${textAlign}
  ${textOverflow}
  ${whiteSpace}
`;

type Sizes = 0 | 1 | 2 | 3 | 4 | 5;
type Weights = 'normal' | 'bold';

type HeadingProps = ComponentPropsWithRef<'h1'> &
  SpaceProps & {
    size?: Sizes | Sizes[];
    weight?: Weights | Weights[];
    truncate?: boolean;
  };

export const Heading: FC<HeadingProps> = ({
  size = 3,
  weight = 'normal',
  truncate = false,
  ...props
}) => {
  return (
    <SystemHeading
      color="grays.8"
      {...props}
      fontSize={getPropsFromScale([3, 5, 7, 8, 9, 10], size)}
      letterSpacing={getPropsFromScale(
        ['-.0125em', '-.005em', '-.012em', '-.028em', ' -.042em', ' -.052em'],
        size
      )}
      marginLeft={getPropsFromScale(
        ['-.05em', '-.06em', '-.075em', '-.085em', '-.088em', '-.09em'],
        size
      )}
      fontWeight={getPropsFromScale({ normal: 400, bold: 500 }, weight)}
      fontFamily={getPropsFromScale(
        { normal: 'normal', bold: 'medium' },
        weight
      )}
      whiteSpace={truncate ? 'nowrap' : undefined}
      textOverflow={truncate ? 'ellipsis' : undefined}
      overflow={truncate ? 'hidden' : undefined}
    />
  );
};
