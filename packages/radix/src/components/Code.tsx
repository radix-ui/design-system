import React from 'react';
import { Code as CodePrimitive, CodeProps as CodePrimitiveProps } from '@modulz/primitives';
import { theme } from '../theme';

export type CodeProps = CodePrimitiveProps;

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
            color: theme.colors.gray800,
            boxShadow: `inset 0 0 0 1px ${theme.colors.gray300}`,
          },
        },
      },
    }}
  />
));
