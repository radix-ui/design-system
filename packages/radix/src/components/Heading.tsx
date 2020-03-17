import React from 'react';
import { Text as TextPrimitive, TextProps as TextPrimitiveProps } from '@modulz/primitives';
import { theme } from '../theme';

type FontWeight = 400 | 500;
type Size = 0 | 1 | 2 | 3 | 4 | 5;

export type HeadingProps = TextPrimitiveProps & {
  fontWeight?: FontWeight;
  size?: Size;
  truncate?: boolean;
  as?: any;
};

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>((props, forwardedRef) => (
  <TextPrimitive
    {...props}
    ref={forwardedRef}
    styleConfig={{
      base: {
        text: {
          normal: {
            fontFamily: theme.fonts.normal,
            fontWeight: 400,
            lineHeight: 1.2,
            color: theme.colors.gray900,
          },
        },
      },
      variants: {
        fontWeight: {
          400: {
            text: {
              normal: {
                fontWeight: 400,
              },
            },
          },
          500: {
            text: {
              normal: {
                fontWeight: 500,
              },
            },
          },
        },
        size: {
          0: {
            text: {
              normal: {
                fontSize: theme.fontSizes[3],
                lineHeight: theme.lineHeights[2],
                letterSpacing: props.fontWeight === 500 ? '-0.025em' : '-0.01em',
                textIndent: '-0.01em',
              },
            },
          },
          1: {
            text: {
              normal: {
                fontSize: theme.fontSizes[5],
                lineHeight: theme.lineHeights[2],
                letterSpacing: props.fontWeight === 500 ? '-0.035em' : '-0.02em',
                textIndent: '-0.02em',
              },
            },
          },
          2: {
            text: {
              normal: {
                fontSize: theme.fontSizes[7],
                lineHeight: theme.lineHeights[3],
                letterSpacing: props.fontWeight === 500 ? '-0.04em' : '-0.02em',
                textIndent: '-0.025em',
              },
            },
          },
          3: {
            text: {
              normal: {
                fontSize: theme.fontSizes[8],
                lineHeight: theme.lineHeights[4],
                letterSpacing: props.fontWeight === 500 ? '-0.045em' : '-0.025em',
                textIndent: '-0.03em',
              },
            },
          },
          4: {
            text: {
              normal: {
                fontSize: theme.fontSizes[9],
                lineHeight: theme.lineHeights[5],
                letterSpacing: props.fontWeight === 500 ? '-0.045em' : '-0.025em',
                textIndent: '-0.04em',
              },
            },
          },
          5: {
            text: {
              normal: {
                fontSize: theme.fontSizes[10],
                lineHeight: theme.lineHeights[9],
                letterSpacing: props.fontWeight === 500 ? '-0.05em' : '-0.03em',
                textIndent: '-0.04em',
              },
            },
          },
        },
        truncate: {
          true: {
            text: {
              normal: {
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
              },
            },
          },
        },
      },
    }}
  />
));

Heading.defaultProps = {
  as: 'h1',
  truncate: false,
  size: 2,
};
