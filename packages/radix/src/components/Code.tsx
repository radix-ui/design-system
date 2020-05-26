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
            fontSize: 'max(12px, 85%)',
            marginLeft: '0.1em',
            marginRight: '0.1em',
            paddingTop: '0.1em',
            paddingBottom: '0.1em',
            paddingLeft: '0.45em',
            paddingRight: '0.45em',
          },
        },
      },
    }}
  />
));
