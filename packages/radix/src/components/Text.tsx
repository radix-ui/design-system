import styled from '@emotion/styled';
import css from '@styled-system/css';
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
} from 'styled-system';

type TextProps = ColorProps &
  SpaceProps &
  FontSizeProps &
  FontFamilyProps &
  FontStyleProps &
  TextAlignProps &
  LineHeightProps &
  FontWeightProps &
  LetterSpacingProps & {
    truncate?: boolean;
  };

// TODO: Fix color typings
// @ts-ignore
export const Text = styled('span')<TextProps>(
  ({ truncate }: TextProps) =>
    css({
      fontFamily: 'normal',
      fontSize: 4,
      color: 'grays.7',
      margin: 0,
      padding: 0,
      whiteSpace: truncate ? 'nowrap' : undefined,
      textOverflow: truncate ? 'ellipsis' : undefined,
      overflow: truncate ? 'hidden' : undefined,
    }),
  color,
  space,
  fontSize,
  fontStyle,
  fontFamily,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing
);
