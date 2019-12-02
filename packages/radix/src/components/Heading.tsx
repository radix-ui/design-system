import React from 'react';
import css from '@styled-system/css';
import { variant, Prop } from '@modulz/radix-system';
import { Heading as HeadingPrimitive, HeadingProps as HeadingPrimitiveProps } from 'mdlz-prmtz';

type HeadingProps = HeadingPrimitiveProps & {
  fontWeight?: Prop<400 | 500>;
  size?: Prop<0 | 1 | 2 | 3 | 4 | 5>;
  truncate?: Prop<boolean>;
  children?: React.ReactNode;
  as?: any;
};

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => (
  <HeadingPrimitive
    {...props}
    ref={ref}
    css={[
      css({
        color: 'gray900',
        lineHeight: 1.2,
        fontWeight: 400,
        fontFamily: 'normal',
      }),
      variant({
        size: {
          0: {
            fontSize: 3,
            lineHeight: 2,
            letterSpacing: props.fontWeight === 500 ? '-0.025em' : '-0.01em',
            textIndent: '-0.01em',
          },
          1: {
            fontSize: 5,
            lineHeight: 2,
            letterSpacing: props.fontWeight === 500 ? '-0.035em' : '-0.02em',
            textIndent: '-0.02em',
          },
          2: {
            fontSize: 7,
            lineHeight: 3,
            letterSpacing: props.fontWeight === 500 ? '-0.04em' : '-0.02em',
            textIndent: '-0.025em',
          },
          3: {
            fontSize: 8,
            lineHeight: 4,
            letterSpacing: props.fontWeight === 500 ? '-0.045em' : '-0.025em',
            textIndent: '-0.03em',
          },
          4: {
            fontSize: 9,
            lineHeight: 5,
            letterSpacing: props.fontWeight === 500 ? '-0.045em' : '-0.025em',
            textIndent: '-0.04em',
          },
          5: {
            fontSize: 10,
            lineHeight: 9,
            letterSpacing: props.fontWeight === 500 ? '-0.05em' : '-0.03em',
            textIndent: '-0.04em',
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

Heading.defaultProps = {
  truncate: false,
  size: 2,
};
