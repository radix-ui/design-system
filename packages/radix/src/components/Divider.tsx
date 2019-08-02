import React from 'react';
import css from '@styled-system/css';
import { variant, Prop } from '@modulz/radix-system';
import {
  Divider as DividerPrimitive,
  DividerProps as DividerPrimitiveProps,
} from '@modulz/primitives';

type Sizes = 0 | 1 | 2;
type DividerProps = DividerPrimitiveProps & { size?: Prop<Sizes> };

export const Divider = (props: DividerProps) => (
  <DividerPrimitive
    {...props}
    css={[
      css({
        backgroundColor: 'grays.2',
      }),
      variant({
        size: {
          0: {
            maxWidth: 3,
          },
          1: {
            maxWidth: 6,
          },
          2: {
            maxWidth: 9,
          },
        },
      }),
    ]}
  />
);
