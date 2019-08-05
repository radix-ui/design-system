import React from 'react';
import css from '@styled-system/css';
import { Text as TextPrimitive, TextProps as TextPrimitiveProps } from 'mdlz-prmtz';
import { variant, Prop } from '@modulz/radix-system';

type TextProps = TextPrimitiveProps & {
  fontWeight?: Prop<400 | 500>;
  size?: Prop<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8>;
  truncate?: Prop<boolean>;
  // TODO: fix
  as?: any;
};

export const Text: React.FC<TextProps> = props => (
  <TextPrimitive
    {...props}
    css={[
      css({
        color: 'grays.7',
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
      })(props),
      variant({
        truncate: {
          true: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          },
        },
      })(props),
    ]}
  />
);

Text.defaultProps = { truncate: false };
