import React from 'react';
import { Textarea as TextareaPrimitive, TextareaProps as TextareaPrimitiveProps } from 'mdlz-prmtz';
import { theme } from '../theme';

type Variant = 'normal' | 'ghost';
type Size = 0 | 1;

export type TextareaProps = TextareaPrimitiveProps & {
  variant?: Variant;
  size?: Size & any;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, forwardedRef) => (
    <TextareaPrimitive
      {...props}
      ref={forwardedRef}
      styleConfig={{
        base: {
          textarea: {
            normal: {
              cursor: 'default',
              color: theme.colors.gray800,
              fontFamily: theme.fonts.normal,
              borderRadius: theme.radii[1],
              minHeight: theme.sizes[9],
            },
            readOnly: {
              color: theme.colors.gray700,
            },
            disabled: {
              backgroundColor: theme.colors.gray100,
              color: theme.colors.gray500,
              cursor: 'not-allowed',
            },
            focus: {
              boxShadow: `inset 0 0 0 1px ${theme.colors.blue500}, 0 0 0 1px ${theme.colors.blue500}`,
              cursor: 'text',
            },
          },
          placeholder: {
            normal: {
              color: theme.colors.gray600,
            },
          },
        },
        variants: {
          variant: {
            normal: {
              textarea: {
                normal: {
                  boxShadow: `inset 0 0 0 1px ${theme.colors.gray300}`,
                },
              },
            },
            ghost: {
              textarea: {
                normal: {
                  cursor: 'text',
                },
              },
            },
          },
          size: {
            0: {
              textarea: {
                normal: {
                  fontSize: theme.fontSizes[1],
                  letterSpacing: '-0.01em',
                  lineHeight: theme.lineHeights[1],
                  padding: theme.space[1],
                },
              },
            },
            1: {
              textarea: {
                normal: {
                  fontSize: theme.fontSizes[2],
                  letterSpacing: '-0.01em',
                  lineHeight: theme.lineHeights[1],
                  paddingTop: theme.space[1],
                  paddingBottom: theme.space[1],
                  paddingLeft: theme.space[2],
                  paddingRight: theme.space[2],
                },
              },
            },
          },
        },
      }}
    />
  )
);

Textarea.defaultProps = {
  variant: 'normal',
  size: 0,
};
