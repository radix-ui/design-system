import React from 'react';
import css from '@styled-system/css';
import { Text as TextPrimitive, TextProps as TextPrimitiveProps } from 'mdlz-prmtz';
import { variant, Prop } from '@modulz/radix-system';

type TextProps = TextPrimitiveProps & {
  fontWeight?: Prop<400 | 500>;
  size?: Prop<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10>;
  truncate?: Prop<boolean>;
  as?: any;
  children?: React.ReactNode;
};

export const Text = React.forwardRef<HTMLSpanElement, TextProps>((props, ref) => (
  <TextPrimitive
    {...props}
    ref={ref}
    css={[
      css({
        color: 'gray800',
        fontSize: 'inherit',
        margin: 0,
      }),
      variant({
        size: {
          0: {
            fontSize: 0,
            lineHeight: 0,
            letterSpacing: props.fontWeight === 500 ? '-0.015em' : '-0.01em',
          },
          1: {
            fontSize: 1,
            lineHeight: 2,
            letterSpacing: props.fontWeight === 500 ? '-0.035em' : '-0.01em',
          },
          2: {
            fontSize: 2,
            lineHeight: 2,
            letterSpacing: props.fontWeight === 500 ? '-0.035em' : '-0.01em',
          },
          3: {
            fontSize: 3,
            lineHeight: 2,
            letterSpacing: props.fontWeight === 500 ? '-0.035em' : '-0.01em',
          },
          4: {
            fontSize: 4,
            lineHeight: 2,
            letterSpacing: props.fontWeight === 500 ? '-0.035em' : '-0.015em',
          },
          5: {
            fontSize: 5,
            lineHeight: 2,
            letterSpacing: props.fontWeight === 500 ? '-0.04em' : '-0.02em',
          },
          6: {
            fontSize: 6,
            lineHeight: 3,
            letterSpacing: props.fontWeight === 500 ? '-0.04em' : '-0.02em',
          },
          7: {
            fontSize: 7,
            lineHeight: 3,
            letterSpacing: props.fontWeight === 500 ? '-0.04em' : '-0.02em',
          },
          8: {
            fontSize: 8,
            lineHeight: 4,
            letterSpacing: props.fontWeight === 500 ? '-0.045em' : '-0.025em',
          },
          9: {
            fontSize: 9,
            lineHeight: 5,
            letterSpacing: props.fontWeight === 500 ? '-0.045em' : '-0.025em',
          },
          10: {
            fontSize: 10,
            lineHeight: 9,
            letterSpacing: props.fontWeight === 500 ? '-0.05em' : '-0.03em',
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
    ]}
  />
));

Text.defaultProps = { truncate: false };
