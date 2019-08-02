import React from 'react';
import css from '@styled-system/css';
import { variant, Prop } from '@modulz/radix-system';
import { Pipe as PipePrimitive, PipeProps as PipePrimitiveProps } from '@modulz/primitives';

type SizeProps = 'normal' | 'large' | 'fluid';
type PipeProps = PipePrimitiveProps & { variant?: Prop<SizeProps> };

export const Pipe = (props: PipeProps) => (
  <PipePrimitive
    {...props}
    css={[
      css({
        backgroundColor: 'grays.2',
      }),
      variant({
        variant: {
          normal: {
            height: 3,
          },
          large: {
            height: 7,
          },
          fluid: {
            height: '100%',
          },
        },
      }),
    ]}
  />
);

Pipe.defaultProps = { variant: 'normal' };
