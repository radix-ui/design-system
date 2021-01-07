import React from 'react';
import { Text, TextProps } from './Text';

export type TitleProps = Omit<TextProps, 'size'>;

export function Title(props: TitleProps) {
  return (
    <Text
      as="h1"
      {...props}
      size={{
        initial: '8',
        bp2: '9',
      }}
      css={{
        fontWeight: 500,
        fontVariantNumeric: 'proportional-nums',
        lineHeight: '35px',
        ...(props.css as any),

        bp2: {
          lineHeight: '55px',
          ...(props.css?.bp2 as any),
        },
      }}
    />
  );
}
