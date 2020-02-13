import React from 'react';
import { Text as TextPrimitive, TextProps as TextPrimitiveProps } from '@modulz/primitives';
import { theme } from '../theme';

type FontWeight = 400 | 500;
type Size = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type TextProps = TextPrimitiveProps & {
  fontWeight?: FontWeight;
  size?: Size;
  truncate?: boolean;
  as?: any;
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
            color: theme.colors.gray800,
            margin: 0,
          },
        },
      },
      variants: {
        size: {
          0: {
            text: {
              normal: {
                fontSize: theme.fontSizes[0],
                lineHeight: theme.lineHeights[0],
                letterSpacing: props.fontWeight === 500 ? '-0.01em' : 0,
              },
            },
          },
          1: {
            text: {
              normal: {
                fontSize: theme.fontSizes[1],
                lineHeight: theme.lineHeights[2],
                letterSpacing: props.fontWeight === 500 ? '-0.02em' : '-0.01em',
              },
            },
          },
          2: {
            text: {
              normal: {
                fontSize: theme.fontSizes[2],
                lineHeight: theme.lineHeights[2],
                letterSpacing: props.fontWeight === 500 ? '-0.02em' : '-0.01em',
              },
            },
          },
          3: {
            text: {
              normal: {
                fontSize: theme.fontSizes[3],
                lineHeight: theme.lineHeights[2],
                letterSpacing: props.fontWeight === 500 ? '-0.025em' : '-0.01em',
              },
            },
          },
          4: {
            text: {
              normal: {
                fontSize: theme.fontSizes[4],
                lineHeight: theme.lineHeights[2],
                letterSpacing: props.fontWeight === 500 ? '-0.03em' : '-0.015em',
              },
            },
          },
          5: {
            text: {
              normal: {
                fontSize: theme.fontSizes[5],
                lineHeight: theme.lineHeights[2],
                letterSpacing: props.fontWeight === 500 ? '-0.035em' : '-0.02em',
              },
            },
          },
          6: {
            text: {
              normal: {
                fontSize: theme.fontSizes[6],
                lineHeight: theme.lineHeights[3],
                letterSpacing: props.fontWeight === 500 ? '-0.04em' : '-0.02em',
              },
            },
          },
          7: {
            text: {
              normal: {
                fontSize: theme.fontSizes[7],
                lineHeight: theme.lineHeights[3],
                letterSpacing: props.fontWeight === 500 ? '-0.04em' : '-0.02em',
              },
            },
          },
          8: {
            text: {
              normal: {
                fontSize: theme.fontSizes[8],
                lineHeight: theme.lineHeights[4],
                letterSpacing: props.fontWeight === 500 ? '-0.045em' : '-0.025em',
              },
            },
          },
          9: {
            text: {
              normal: {
                fontSize: theme.fontSizes[9],
                lineHeight: theme.lineHeights[5],
                letterSpacing: props.fontWeight === 500 ? '-0.045em' : '-0.025em',
              },
            },
          },
          10: {
            text: {
              normal: {
                fontSize: theme.fontSizes[10],
                lineHeight: theme.lineHeights[9],
                letterSpacing: props.fontWeight === 500 ? '-0.05em' : '-0.03em',
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

Text.defaultProps = { truncate: false };
