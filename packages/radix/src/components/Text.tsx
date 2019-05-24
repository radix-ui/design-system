import styled from 'styled-components';
import css from '@styled-system/css';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  fontFamily,
  FontFamilyProps,
  fontStyle,
  FontStyleProps,
  textAlign,
  TextAlignProps,
  lineHeight,
  LineHeightProps,
  ResponsiveValue,
} from 'styled-system';
import { get } from '../utils/get';

type TextProps = ColorProps &
  SpaceProps &
  FontFamilyProps &
  FontStyleProps &
  TextAlignProps &
  LineHeightProps & {
    size?: ResponsiveValue<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
    bold?: boolean;
    truncate?: boolean;
  };

// TODO: Fix color typings
// @ts-ignore
export const Text = styled('span')<TextProps>(
  ({ size, truncate, bold }: TextProps) =>
    css({
      fontWeight: bold ? '500' : '400',
      fontFamily: bold ? 'medium' : 'normal',
      fontSize: get([0, 1, 2, 3, 4, 5, 6, 7], size, 'inherit'),
      letterSpacing: get(
        [
          '.032em',
          '.032em',
          0,
          '-.001em',
          '-.005em',
          '-.006em',
          '-.008em',
          '-.018em',
          '-.024em',
        ],
        size,
        'inherit'
      ),
      textIndent: get(
        [
          0,
          0,
          0,
          '-.05em',
          '-.06em',
          '-.075em',
          '-.085em',
          '-.088em',
          '-.09em',
        ],
        size,
        'inherit'
      ),
      color: 'grays.7',
      margin: 0,
      padding: 0,
      whiteSpace: truncate ? 'nowrap' : undefined,
      textOverflow: truncate ? 'ellipsis' : undefined,
      overflow: truncate ? 'hidden' : undefined,
    }),
  color,
  space,
  fontStyle,
  fontFamily,
  textAlign,
  lineHeight
);
