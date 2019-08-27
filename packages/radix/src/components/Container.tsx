import React from 'react';
import css from '@styled-system/css';
import {
  Container as ContainerPrimitive,
  ContainerProps as ContainerPrimitiveProps,
} from 'mdlz-prmtz';
import { Prop, variant } from '@modulz/radix-system';

type Sizes = 0 | 1 | 2;
type ContainerProps = ContainerPrimitiveProps & {
  size?: Prop<Sizes>;
  children?: React.ReactNode;
  as?: any;
};

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>((props, ref) => (
  <ContainerPrimitive
    {...props}
    ref={ref}
    css={[
      css({ marginX: 'auto', paddingX: 5, flex: 1 }),
      variant({
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
      }),
    ]}
  />
));

Container.defaultProps = {
  size: 0,
};
