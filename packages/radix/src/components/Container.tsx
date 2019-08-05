import React from 'react';
import {
  Container as ContainerPrimitive,
  ContainerProps as ContainerPrimitiveProps,
} from 'mdlz-prmtz';
import { Prop, variant } from '@modulz/radix-system';

type Sizes = 0 | 1 | 2;
type ContainerProps = ContainerPrimitiveProps & { size?: Prop<Sizes> };

export const Container: React.FC<ContainerProps> = props => (
  <ContainerPrimitive
    marginX="auto"
    paddingX={5}
    flex={1}
    maxWidth="25rem"
    {...props}
    css={variant({
      size: {
        0: {
          maxWidth: '25rem',
        },
        1: {
          maxWidth: '45rem',
        },
        2: {
          maxWidth: '65rem',
        },
      },
    })}
  />
);
