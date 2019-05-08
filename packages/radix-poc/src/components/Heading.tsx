import { FC } from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  fontSize,
  FontSizeProps,
  textAlign,
  TextAlignProps,
  letterSpacing,
  LetterSpacingProps,
  lineHeight,
  LineHeightProps,
  fontWeight,
  FontWeightProps,
  themeGet,
} from 'styled-system';
import { bundlez } from '../utils/utils';

type HeadingProps = ColorProps &
  SpaceProps &
  FontSizeProps &
  TextAlignProps &
  LetterSpacingProps &
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
  ${letterSpacing}
  ${lineHeight}
  ${fontWeight}
`;

type HeadingSizes = 0 | 1 | 2 | 3 | 4 | 5;

type RadixHeadingProps = SpaceProps & {
  size: HeadingSizes | HeadingSizes[];
};

const headingSizes = {
  fontSizes: [3, 5, 7, 8, 9, 10],
  letterSpacings: [
    '-.0125em',
    '-.005em',
    '-.012em',
    '-.028em',
    ' -.042em',
    ' -.052em',
  ],
  marginLefts: ['-.05em', '-.06em', '-.075em', '-.085em', '-.088em', '-.09em'],
};

export const RadixHeading: FC<RadixHeadingProps> = styled(Heading)(
  (props: RadixHeadingProps) =>
    css(
      bundlez(
        props.size,
        { prop: 'fontSize', scale: headingSizes.fontSizes },
        { prop: 'letterSpacing', scale: headingSizes.letterSpacings },
        { prop: 'marginLeft', scale: headingSizes.marginLefts }
      )
    )
);
