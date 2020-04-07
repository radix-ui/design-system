import React from 'react';
import { Link as LinkPrimitive, LinkProps as LinkPrimitiveProps } from '@modulz/primitives';
import { theme } from '../theme';

type Variant = 'ghost' | 'fade' | 'highlight' | 'underline';
export type LinkProps = LinkPrimitiveProps & {
  children?: React.ReactNode;
  variant?: Variant;
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, forwardedRef) => (
  <LinkPrimitive
    {...props}
    ref={forwardedRef}
    styleConfig={{
      base: {
        link: {
          normal: {},
          hover: {
            textDecoration: 'underline',
          },
          focus: {
            boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.1)',
            textDecoration: 'none',
          },
        },
      },
      variants: {
        variant: {
          ghost: {},
          highlight: {
            link: {
              normal: {
                color: theme.colors.blue700,
              },
              focus: {
                boxShadow: `0 0 0 2px ${theme.colors.blue500}`,
              },
            },
          },
          fade: {
            link: {
              normal: {
                color: theme.colors.gray700,
              },
              focus: {
                boxShadow: `0 0 0 2px ${theme.colors.gray400}`,
              },
            },
          },
          underline: {
            link: {
              normal: {
                color: 'inherit',
                textDecoration: 'underline',
                textDecorationColor: theme.colors.gray500,
              },
              hover: {
                textDecorationColor: 'inherit',
              },
              focus: {
                boxShadow: `0 0 0 2px ${theme.colors.gray400}`,
              },
            },
          },
        },
      },
    }}
  />
));

Link.defaultProps = { variant: 'highlight' };
