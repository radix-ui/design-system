import React from 'react';
import { Button as ButtonPrimitive, ButtonProps as ButtonPrimitiveProps } from '@modulz/primitives';
import { theme } from '../theme';

type Size = 0 | 1;

export type GhostButtonProps = ButtonPrimitiveProps & {
  isActive?: boolean;
  size?: Size;
};

export const GhostButton = React.forwardRef<HTMLButtonElement, GhostButtonProps>(
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
              fontFamily: theme.fonts.normal,
              fontSize: theme.fontSizes[1],
              fontVariantNumeric: 'tabular-nums',
              fontWeight: 500,
              lineHeight: theme.lineHeights[2],
              mixBlendMode: 'multiply',
              paddingLeft: theme.space[1],
              paddingRight: theme.space[1],
              userSelect: 'none',
              verticalAlign: 'middle',
              whiteSpace: 'nowrap',
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
          size: {
            0: {
              button: {
                normal: {
                  height: theme.sizes[5],
                  minWidth: theme.sizes[5],
                },
              },
            },
            1: {
              button: {
                normal: {
                  height: theme.sizes[6],
                  minWidth: theme.sizes[6],
                  paddingTop: theme.space[1],
                  paddingBottom: theme.space[1],
                },
              },
            },
          },
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

GhostButton.defaultProps = {
  isActive: false,
  size: 0,
};
