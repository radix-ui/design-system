import React from 'react';
import { Link as LinkPrimitive, LinkProps as LinkPrimitiveProps } from '@modulz/primitives';
import { theme } from '../theme';

type Variant = 'ghost' | 'fade' | 'highlight' | 'underline';
export type LinkProps = LinkPrimitiveProps & {
  to?: string;
  children?: React.ReactNode;
  as?: any;
  variant?: Variant;
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, forwardedRef) => (
  <LinkPrimitive
    {...props}
    ref={forwardedRef}
    styleConfig={{
      base: {
        link: {
          hover: {
            textDecoration: 'underline',
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
                textDecoration: 'none',
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
                textDecoration: 'none',
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
                textDecoration: 'none',
              },
            },
          },
        },
      },
    }}
  />
));

Link.defaultProps = { variant: 'highlight' };
