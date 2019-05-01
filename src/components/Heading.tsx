import styled from 'styled-components';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  fontSize,
  FontSizeProps,
  textAlign,
  TextAlignProps,
  lineHeight,
  LineHeightProps,
  fontWeight,
  FontWeightProps,
  themeGet,
} from 'styled-system';

type HeadingProps = ColorProps &
  SpaceProps &
  FontSizeProps &
  TextAlignProps &
  LineHeightProps &
  FontWeightProps;

export const Heading = styled.h1<HeadingProps>`
  color: ${themeGet('colors.grays.8')};
  font-family: ${themeGet('fonts.medium')};
  margin: 0;
  font-weight: 500;

  ${color}
  ${space}
  ${fontSize}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}
`;
