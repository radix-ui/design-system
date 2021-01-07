import React from 'react';
import { Text, TextProps } from './Text';

export type HeadingProps = Omit<TextProps, 'size'>;

export function Heading(props: HeadingProps) {
  return (
    <Text
      as="h3"
      {...props}
      size={{
        initial: '6',
        bp2: '7',
      }}
      css={{
        fontWeight: 500,
        fontVariantNumeric: 'proportional-nums',
        lineHeight: '25px',
        ...(props.css as any),

        bp2: {
          lineHeight: '30px',
          ...(props.css?.bp2 as any),
        },
      }}
    />
  );
}
