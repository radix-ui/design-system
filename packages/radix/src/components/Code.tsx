import React from 'react';
import css from '@styled-system/css';
import { Code as CodePrimitive, CodeProps as CodePrimitiveProps } from '@modulz/primitives';

export const Code = (props: CodePrimitiveProps) => (
  <CodePrimitive
    {...props}
    css={[
      css({
        backgroundColor: 'blues.1',
        color: 'blues.5',
        borderRadius: 1,
        fontFamily: 'mono',
        fontSize: 2,
        letterSpacing: '-0.0175em',
        paddingY: '0.15em',
        paddingX: 1,
      }),
      { lineHeight: 1 },
    ]}
  />
);
