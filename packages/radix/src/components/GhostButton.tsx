import React from 'react';
import { Button as ButtonPrimitive, ButtonProps as ButtonPrimitiveProps } from 'mdlz-prmtz';
import { theme } from '../theme';

export type GhostButtonProps = ButtonPrimitiveProps & {
  isActive?: boolean;
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
              fontWeight: 500,
              lineHeight: theme.lineHeights[2],
              height: theme.sizes[5],
              minWidth: theme.sizes[5],
              paddingTop: 0,
              paddingBottom: 0,
              paddingLeft: theme.space[1],
              paddingRight: theme.space[1],
              userSelect: 'none',
              verticalAlign: 'middle',
              whiteSpace: 'nowrap',
            },
            active: {
              backgroundColor: theme.colors.gray300,
              boxShadow: `0 0 0 1px ${theme.colors.gray300}`,
            },
            hover: {
              backgroundColor: theme.colors.gray200,
              boxShadow: `0 0 0 1px ${theme.colors.gray200}`,
            },
            disabled: {
              color: theme.colors.gray600,
              cursor: 'not-allowed',
            },
            focus: {
              boxShadow: `0 0 0 2px ${theme.colors.blue500}`,
            },
          },
        },
        variants: {
          isActive: {
            true: {
              button: {
                normal: {
                  backgroundColor: theme.colors.blue200,
                  color: theme.colors.blue600,
                  boxShadow: `0 0 0 1px ${theme.colors.blue200}`,
                },
                hover: {
                  backgroundColor: theme.colors.blue200,
                  boxShadow: `0 0 0 1px ${theme.colors.blue200}`,
                },
                active: {
                  backgroundColor: theme.colors.blue300,
                  boxShadow: `0 0 0 1px ${theme.colors.blue300}`,
                },
                focus: { boxShadow: `0 0 0 2px ${theme.colors.blue500}` },
              },
            },
          },
        },
      }}
    />
  )
);
