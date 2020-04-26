import React from 'react';
import {
  Container as ContainerPrimitive,
  ContainerProps as ContainerPrimitiveProps,
} from '@modulz/primitives';
import { theme } from '../theme';
import {
  SimplifiedTypeWithDefaultState,
  stylesFor,
  withDefaultBase,
  withDefaultSizes,
} from '../utilities/styles-creator';

type Size = 0 | 1 | 2 | 3 | 4;

export type ContainerProps = ContainerPrimitiveProps & {
  size?: Size;
};

const baseStyles = {
  paddingLeft: theme.space[5],
  paddingRight: theme.space[5],
  flex: 1,
};

const sizes = [305, 585, 865, 1145, 'none'].reduce(
  (acc, item, i): SimplifiedTypeWithDefaultState => ({
    ...acc,
    [i]: {
      maxWidth: item,
    },
  }),
  {}
);

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>((props, forwadedRef) => (
  <ContainerPrimitive
    {...props}
    ref={forwadedRef}
    styleConfig={stylesFor('container')(withDefaultBase(baseStyles), withDefaultSizes(sizes))}
  />
));

Container.defaultProps = {
  size: 0,
};
