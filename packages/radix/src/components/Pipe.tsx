import React from 'react';
import { Pipe as PipePrimitive, PipeProps as PipePrimitiveProps } from '@modulz/primitives';
import { theme } from '../theme';

type Variant = 'normal' | 'large' | 'fluid';
export type PipeProps = PipePrimitiveProps & { variant?: Variant };

export const Pipe = React.forwardRef<HTMLDivElement, PipeProps>((props, forwardedRef) => (
  <PipePrimitive
    {...props}
    ref={forwardedRef}
    styleConfig={{
      base: {
        pipe: {
          normal: {
            width: 1,
            backgroundColor: theme.colors.gray300,
          },
        },
      },
      variants: {
        variant: {
          normal: {
            pipe: {
              normal: {
                height: theme.sizes[3],
              },
            },
          },
          large: {
            pipe: {
              normal: {
                height: theme.sizes[7],
              },
            },
          },
          fluid: {
            pipe: {
              normal: {
                height: '100%',
              },
            },
          },
        },
      },
    }}
  />
));

Pipe.defaultProps = { variant: 'normal' };
