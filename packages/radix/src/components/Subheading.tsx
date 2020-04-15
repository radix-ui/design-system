import React from 'react';
import { Text as TextPrimitive, TextProps as TextPrimitiveProps } from '@modulz/primitives';
import { theme } from '../theme';

type Size = 0 | 1;

export type SubheadingProps = TextPrimitiveProps & {
  size?: Size;
  truncate?: boolean;
};

export const Subheading = React.forwardRef<HTMLHeadingElement, SubheadingProps>(
  (props, forwardedRef) => (
    <TextPrimitive
      {...props}
      ref={forwardedRef}
      styleConfig={{
        base: {
          text: {
            normal: {
              fontFamily: theme.fonts.normal,
              fontVariant: 'all-small-caps',
              fontWeight: 500,
              color: theme.colors.gray800,
              letterSpacing: '0.05em',

              // Chrome doesn't use kerning on the faux small caps otherwise
              textTransform: 'uppercase',
            },
          },
        },
        variants: {
          size: {
            0: {
              text: {
                normal: {
                  fontSize: theme.fontSizes[3],
                  lineHeight: theme.lineHeights[1],
                },
              },
            },
            1: {
              text: {
                normal: {
                  fontSize: theme.fontSizes[5],
                  lineHeight: theme.lineHeights[1],
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
  )
);

Subheading.defaultProps = {
  as: 'h2',
  size: 0,
  truncate: false,
};
