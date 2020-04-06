import React from 'react';
import { Text as TextPrimitive, TextProps as TextPrimitiveProps } from '@modulz/primitives';
import { theme } from '../theme';

type Weight = 'normal' | 'medium';
type Size = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type TextProps = TextPrimitiveProps & {
  weight?: Weight;
  size?: Size;
  truncate?: boolean;
};

export const Text = React.forwardRef<HTMLSpanElement, TextProps>((props, forwardedRef) => (
  <TextPrimitive
    {...props}
    ref={forwardedRef}
    styleConfig={{
      base: {
        text: {
          normal: {
            fontSize: 'inherit',
            fontVariantNumeric: 'tabular-nums',
            color: theme.colors.gray800,
            margin: 0,
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
                fontSize: theme.fontSizes[0],
                lineHeight: theme.lineHeights[0],
                letterSpacing: 0,
              },
            },
          },
          1: {
            text: {
              normal: {
                fontSize: theme.fontSizes[1],
                lineHeight: theme.lineHeights[2],
                letterSpacing: '-0.001em',
              },
            },
          },
          2: {
            text: {
              normal: {
                fontSize: theme.fontSizes[2],
                lineHeight: theme.lineHeights[2],
                letterSpacing: '-0.002em',
              },
            },
          },
          3: {
            text: {
              normal: {
                fontSize: theme.fontSizes[3],
                lineHeight: theme.lineHeights[2],
                letterSpacing: '-0.003em',
              },
            },
          },
          4: {
            text: {
              normal: {
                fontSize: theme.fontSizes[4],
                lineHeight: theme.lineHeights[2],
                letterSpacing: '-0.005em',
              },
            },
          },
          5: {
            text: {
              normal: {
                fontSize: theme.fontSizes[5],
                lineHeight: theme.lineHeights[2],
                letterSpacing: '-0.008em',
              },
            },
          },
          6: {
            text: {
              normal: {
                fontSize: theme.fontSizes[6],
                lineHeight: theme.lineHeights[3],
                letterSpacing: '-0.013em',
              },
            },
          },
          7: {
            text: {
              normal: {
                fontSize: theme.fontSizes[7],
                lineHeight: theme.lineHeights[3],
                letterSpacing: '-0.021em',
              },
            },
          },
          8: {
            text: {
              normal: {
                fontSize: theme.fontSizes[8],
                lineHeight: theme.lineHeights[4],
                letterSpacing: '-0.034em',
              },
            },
          },
          9: {
            text: {
              normal: {
                fontSize: theme.fontSizes[9],
                lineHeight: theme.lineHeights[5],
                letterSpacing: '-0.034em',
              },
            },
          },
          10: {
            text: {
              normal: {
                fontSize: theme.fontSizes[10],
                lineHeight: theme.lineHeights[9],
                letterSpacing: '-0.055em',
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

Text.defaultProps = {
  truncate: false,
  size: 2,
  weight: 'normal',
};
