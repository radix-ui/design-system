import React from 'react';
import {
  Divider as DividerPrimitive,
  DividerProps as DividerPrimitiveProps,
} from '@modulz/primitives';
import { theme } from '../theme';

type Size = 0 | 1 | 2;
export type DividerProps = DividerPrimitiveProps & { size?: Size };

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>((props, forwardedRef) => (
  <DividerPrimitive
    {...props}
    ref={forwardedRef}
    styleConfig={{
      base: {
        divider: {
          normal: {
            height: 1,
            backgroundColor: theme.colors.gray300,
          },
        },
      },
      variants: {
        size: {
          0: {
            divider: {
              normal: {
                maxWidth: theme.sizes[3],
              },
            },
          },
          1: {
            divider: {
              normal: {
                maxWidth: theme.sizes[6],
              },
            },
          },
          2: {
            divider: {
              normal: {
                maxWidth: theme.sizes[9],
              },
            },
          },
        },
      },
    }}
  />
));
