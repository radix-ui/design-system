import React from 'react';
import css from '@styled-system/css';
import { Code as CodePrimitive, CodeProps as CodePrimitiveProps } from 'mdlz-prmtz';

type CodeProps = CodePrimitiveProps & { children?: React.ReactNode };

export const Code = (props: CodeProps) => (
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
