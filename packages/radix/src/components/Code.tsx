import React from 'react';
import { Code as CodePrimitive, CodeProps as CodePrimitiveProps } from 'mdlz-prmtz';
import { theme } from '../theme';

type Variant = 'normal' | 'fade';
export type CodeProps = CodePrimitiveProps & { variant?: Variant };

export const Code = React.forwardRef<HTMLElement, CodeProps>((props, forwardedRef) => (
  <CodePrimitive
    {...props}
    ref={forwardedRef}
    styleConfig={{
      base: {
        code: {
          normal: {
            fontFamily: theme.fonts.mono,
            fontSize: theme.fontSizes[2],
            lineHeight: theme.lineHeights[1],
            paddingLeft: theme.space[1],
            paddingRight: theme.space[1],
            borderRadius: theme.radii[1],
          },
        },
      },
      variants: {
        variant: {
          normal: {
            code: {
              normal: {
                backgroundColor: theme.colors.blue200,
                color: theme.colors.blue700,
              },
            },
          },
          fade: {
            code: {
              normal: {
                backgroundColor: theme.colors.gray200,
                color: theme.colors.gray700,
              },
            },
          },
        },
      },
    }}
  />
));

Code.defaultProps = { variant: 'normal' };
