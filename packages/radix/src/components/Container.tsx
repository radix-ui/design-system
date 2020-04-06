import React from 'react';
import {
  Container as ContainerPrimitive,
  ContainerProps as ContainerPrimitiveProps,
} from '@modulz/primitives';
import { theme } from '../theme';

type Size = 0 | 1 | 2 | 3 | 4;

export type ContainerProps = ContainerPrimitiveProps & {
  size?: Size;
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
                maxWidth: 305,
              },
            },
          },
          1: {
            container: {
              normal: {
                maxWidth: 585,
              },
            },
          },
          2: {
            container: {
              normal: {
                maxWidth: 865,
              },
            },
          },
          3: {
            container: {
              normal: {
                maxWidth: 1145,
              },
            },
          },
          4: {
            container: {
              normal: {
                maxWidth: 'none',
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
