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
import { themeColor } from '../theme';

type HeadingProps = ColorProps &
  SpaceProps &
  FontSizeProps &
  TextAlignProps &
  LineHeightProps &
  FontWeightProps;

export const Heading = styled.h1<HeadingProps>`
  color: ${themeColor('grays.8')};
  font-family: ${themeGet('fonts.normal')};
  margin: 0;

  ${color}
  ${space}
  ${fontSize}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}
`;
