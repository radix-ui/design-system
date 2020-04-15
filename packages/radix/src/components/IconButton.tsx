import React from 'react';
import { Button as ButtonPrimitive, ButtonProps as ButtonPrimitiveProps } from '@modulz/primitives';
import { theme } from '../theme';

export type IconButtonProps = ButtonPrimitiveProps & {
  isActive?: boolean;
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, forwardedRef) => (
    <ButtonPrimitive
      {...props}
      ref={forwardedRef}
      styleConfig={{
        base: {
          button: {
            normal: {
              borderRadius: 9999,
              color: theme.colors.gray800,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              mixBlendMode: 'multiply',
              padding: theme.space[1],
              verticalAlign: 'middle',
            },
            hover: {
              backgroundColor: theme.colors.gray200,
              boxShadow: `0 0 0 1px ${theme.colors.gray200}`,
            },
            active: {
              backgroundColor: theme.colors.gray300,
              boxShadow: `0 0 0 1px ${theme.colors.gray300}`,
            },
            disabled: {
              color: theme.colors.gray600,
              cursor: 'not-allowed',
            },
            focus: {
              boxShadow: `0 0 0 2px ${theme.colors.gray500}`,
            },
          },
        },
        variants: {
          isActive: {
            true: {
              button: {
                normal: {
                  backgroundColor: theme.colors.gray200,
                  boxShadow: `0 0 0 1px ${theme.colors.gray200}`,
                },
                hover: {
                  backgroundColor: theme.colors.gray200,
                  boxShadow: `0 0 0 1px ${theme.colors.gray200}`,
                },
                active: {
                  backgroundColor: theme.colors.gray300,
                  boxShadow: `0 0 0 1px ${theme.colors.gray300}`,
                },
                focus: {
                  boxShadow: `0 0 0 2px ${theme.colors.gray500}`,
                },
              },
            },
          },
        },
      }}
    />
  )
);
