import styled from '@emotion/styled';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  textAlign,
  lineHeight,
  LineHeightProps,
  TextAlignProps,
  ResponsiveValue,
} from 'styled-system';
import { get } from '../utils/get';
import css from '@styled-system/css';

type HeadingProps = ColorProps &
  SpaceProps &
  TextAlignProps &
  LineHeightProps & {
    size?: ResponsiveValue<0 | 1 | 2 | 3 | 4 | 5>;
    bold?: boolean;
    truncate?: boolean;
  };

// TODO: Fix color typings
// @ts-ignore
export const Heading = styled('h1')<HeadingProps>(
  ({ size = 2, bold, truncate }: HeadingProps) =>
    css({
      margin: 0,
      lineHeight: 1.2,
      color: 'grays.8',
      fontSize: get([3, 5, 7, 8, 9, 10], size),
      letterSpacing: get(
        ['-.0125em', '-.005em', '-.012em', '-.028em', ' -.042em', ' -.052em'],
        size
      ),
      textIndent: get(
        ['-.05em', '-.06em', '-.075em', '-.085em', '-.088em', '-.09em'],
        size
      ),
      fontWeight: bold ? '500' : '400',
      fontFamily: bold ? 'medium' : 'normal',
      whiteSpace: truncate ? 'nowrap' : undefined,
      textOverflow: truncate ? 'ellipsis' : undefined,
      overflow: truncate ? 'hidden' : undefined,
    }),
  color,
  space,
  textAlign,
  lineHeight
);
