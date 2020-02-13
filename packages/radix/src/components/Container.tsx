import React from 'react';
import {
  Container as ContainerPrimitive,
  ContainerProps as ContainerPrimitiveProps,
} from '@modulz/primitives';
import { theme } from '../theme';

type Size = 0 | 1 | 2;

export type ContainerProps = ContainerPrimitiveProps & {
  size?: Size;
  as?: any;
};

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>((props, forwadedRef) => (
  <ContainerPrimitive
    {...props}
    ref={forwadedRef}
    styleConfig={{
      base: {
        container: {
          normal: {
            paddingLeft: theme.space[5],
            paddingRight: theme.space[5],
            flex: 1,
          },
        },
      },
      variants: {
        size: {
          0: {
            container: {
              normal: {
                maxWidth: '25rem',
              },
            },
          },
          1: {
            container: {
              normal: {
                maxWidth: '45rem',
              },
            },
          },
          2: {
            container: {
              normal: {
                maxWidth: '65rem',
              },
            },
          },
        },
      },
    }}
  />
));

Container.defaultProps = {
  size: 0,
};
