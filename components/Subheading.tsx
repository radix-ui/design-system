import React from 'react';
import { Text, TextProps } from './Text';

export type SubheadingProps = Omit<TextProps, 'size'>;

export function Subheading(props: SubheadingProps) {
  return (
    <Text
      as="h4"
      {...props}
      size={{
        initial: '4',
        bp2: '5',
      }}
      css={{
        fontWeight: 500,
        fontVariantNumeric: 'proportional-nums',
        lineHeight: '20px',
        ...(props.css as any),

        bp2: {
          lineHeight: '23px',
          ...(props.css?.bp2 as any),
        },
      }}
    />
  );
}
