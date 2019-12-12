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
              border: '1px solid',
              borderColor: theme.colors.gray300,
              borderRadius: theme.radii[1],
              minHeight: theme.sizes[9],
            },
            readOnly: {
              borderColor: theme.colors.gray300,
              color: theme.colors.gray700,
            },
            disabled: {
              borderColor: theme.colors.gray300,
              color: theme.colors.gray500,
              cursor: 'not-allowed',
            },
            focus: {
              borderColor: theme.colors.blue500,
              boxShadow: `0 0 0 1px ${theme.colors.blue500}`,
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
                  borderColor: theme.colors.gray300,
                },
              },
            },
            ghost: {
              textarea: {
                normal: {
                  borderColor: 'transparent',
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
                  lineHeight: theme.lineHeights[2],
                  paddingLeft: theme.space[1],
                  paddingRight: theme.space[1],
                },
              },
            },
            1: {
              textarea: {
                normal: {
                  fontSize: theme.fontSizes[2],
                  letterSpacing: '-0.01em',
                  lineHeight: theme.lineHeights[4],
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
