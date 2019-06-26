import styled from 'styled-components';
import css from '@styled-system/css';
import {
  textColor,
  TextColorProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
  fontFamily,
  FontFamilyProps,
  fontStyle,
  FontStyleProps,
  textAlign,
  TextAlignProps,
  lineHeight,
  LineHeightProps,
  variant,
  compose,
  Prop,
} from '@modulz/radix-system';

type TextProps = TextColorProps &
  MarginProps &
  PaddingProps &
  FontFamilyProps &
  FontStyleProps &
  TextAlignProps &
  LineHeightProps & {
    size?: Prop<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8>;
    fontWeight?: Prop<'normal' | 'bold'>;
    truncate?: Prop<boolean>;
  };

const styleProps = compose(
  textColor,
  margin,
  padding,
  fontStyle,
  fontFamily,
  textAlign,
  lineHeight
);

export const Text = styled('span')<TextProps>(
  css({
    color: 'grays.7',
    fontFamily: 'normal',
    fontSize: 'inherit',
    margin: 0,
  }),
  variant({
    size: {
      0: {
        fontSize: 0,
        letterSpacing: '.032em',
      },
      1: {
        fontSize: 1,
        letterSpacing: '.032em',
      },
      2: {
        fontSize: 2,
      },
      3: {
        fontSize: 3,
        letterSpacing: '-.001em',
        textIndent: '-.05em',
      },
      4: {
        fontSize: 4,
        letterSpacing: '-.005em',
        textIndent: '-.06em',
      },
      5: {
        fontSize: 5,
        letterSpacing: '-.006em',
        textIndent: '-.075em',
      },
      6: {
        fontSize: 6,
        letterSpacing: '-.008em',
        textIndent: '-.085em',
      },
      7: {
        fontSize: 7,
        letterSpacing: '-.018em',
        textIndent: '-.088em',
      },
      8: {
        fontSize: 8,
        letterSpacing: '-.024em',
        textIndent: '-.09em',
      },
    },
  }),
  variant({
    truncate: {
      true: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
      },
    },
  }),
  variant({
    fontWeight: {
      normal: { fontWeight: 400 },
      bold: { fontWeight: 500 },
    },
  }),
  styleProps
);

Text.defaultProps = {
  fontWeight: 'normal',
  truncate: false,
};
