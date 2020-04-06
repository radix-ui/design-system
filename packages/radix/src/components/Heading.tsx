import React from 'react';
import { Text as TextPrimitive, TextProps as TextPrimitiveProps } from '@modulz/primitives';
import { theme } from '../theme';

type Weight = 'normal' | 'medium';
type Size = 0 | 1 | 2 | 3 | 4 | 5;

export type HeadingProps = TextPrimitiveProps & {
  weight?: Weight;
  size?: Size;
  truncate?: boolean;
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
            fontWeight: 500,
            color: theme.colors.gray800,
          },
        },
      },
      variants: {
        weight: {
          normal: {
            text: {
              normal: {
                fontWeight: 400,
              },
            },
          },
          medium: {
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
                letterSpacing: '-0.005em',
                textIndent: '-0.0025em',
              },
            },
          },
          1: {
            text: {
              normal: {
                fontSize: theme.fontSizes[5],
                lineHeight: theme.lineHeights[2],
                letterSpacing: '-0.008em',
                textIndent: '-0.004em',
              },
            },
          },
          2: {
            text: {
              normal: {
                fontSize: theme.fontSizes[7],
                lineHeight: theme.lineHeights[3],
                letterSpacing: '-0.013em',
                textIndent: '-0.00625em',
              },
            },
          },
          3: {
            text: {
              normal: {
                fontSize: theme.fontSizes[8],
                lineHeight: theme.lineHeights[4],
                letterSpacing: '-0.021em',
                textIndent: '-0.0105em',
              },
            },
          },
          4: {
            text: {
              normal: {
                fontSize: theme.fontSizes[9],
                lineHeight: theme.lineHeights[5],
                letterSpacing: '-0.034em',
                textIndent: '-0.017em',
              },
            },
          },
          5: {
            text: {
              normal: {
                fontSize: theme.fontSizes[10],
                lineHeight: theme.lineHeights[9],
                letterSpacing: '-0.055em',
                textIndent: '-0.0275em',
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
  weight: 'medium',
};
