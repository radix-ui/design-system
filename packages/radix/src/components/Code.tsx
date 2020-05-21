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
            borderRadius: '0.25em',
            boxShadow: `inset 0 0 0 1px ${theme.colors.gray300}`,
            color: theme.colors.gray800,
            fontFamily: theme.fonts.mono,
            fontSize: '80%',
            marginX: '0.1em',
            paddingX: '0.45em',
            paddingY: '0.1em',
          },
        },
      },
    }}
  />
));
