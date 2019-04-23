import styled from 'styled-components';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  fontSize,
  FontSizeProps,
  fontFamily,
  FontFamilyProps,
  fontStyle,
  FontStyleProps,
  textAlign,
  TextAlignProps,
  lineHeight,
  LineHeightProps,
  fontWeight,
  FontWeightProps,
  letterSpacing,
  LetterSpacingProps,
  themeGet,
} from 'styled-system';
import { themeColor } from '../theme';

type TextProps = ColorProps &
  SpaceProps &
  FontSizeProps &
  FontFamilyProps &
  FontStyleProps &
  TextAlignProps &
  LineHeightProps &
  FontWeightProps &
  LetterSpacingProps;

export const Text = styled.span<TextProps>`
  font-family: ${themeGet('fonts.normal')};
  font-size: ${themeGet('fontSizes.4')};
  color: ${themeColor('grays.7')};
  margin: 0;
  padding: 0;

  ${color}
  ${space}
  ${fontSize}
  ${fontStyle}
  ${fontFamily}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}
  ${letterSpacing}
`;
