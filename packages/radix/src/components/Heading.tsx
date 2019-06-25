import styled from 'styled-components';
import css from '@styled-system/css';
import {
  textColor,
  TextColorProps,
  margin,
  MarginProps,
  textAlign,
  lineHeight,
  LineHeightProps,
  TextAlignProps,
  variant,
  compose,
  Prop,
} from '@modulz/radix-system';

type HeadingProps = TextColorProps &
  MarginProps &
  TextAlignProps &
  LineHeightProps & {
    size?: Prop<0 | 1 | 2 | 3 | 4 | 5>;
    fontWeight?: Prop<'normal' | 'bold'>;
    truncate?: Prop<boolean>;
  };

const styleProps = compose(
  textColor,
  margin,
  textAlign,
  lineHeight
);

export const Heading = styled('h1')<HeadingProps>(
  css({
    color: 'grays.8',
    fontFamily: 'normal',
    margin: 0,
    lineHeight: 1.2,
  }),
  variant({
    size: {
      0: {
        fontSize: 3,
        letterSpacing: '-.0125em',
        textIndent: '-.05em',
      },
      1: {
        fontSize: 5,
        letterSpacing: '-.005em',
        textIndent: '-.06em',
      },
      2: {
        fontSize: 7,
        letterSpacing: '-.012em',
        textIndent: '-.075em',
      },
      3: {
        fontSize: 8,
        letterSpacing: '-.028em',
        textIndent: '-.085em',
      },
      4: {
        fontSize: 9,
        letterSpacing: '-.042em',
        textIndent: '-.088em',
      },
      5: {
        fontSize: 10,
        letterSpacing: '-.052em',
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

Heading.defaultProps = {
  fontWeight: 'normal',
  truncate: false,
  size: 2,
};
