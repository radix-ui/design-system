import React from 'react';
import {
  Container as ContainerPrimitive,
  Divider as DividerPrimitive,
  DividerProps as DividerPrimitiveProps,
} from '@modulz/primitives';
import { theme } from '../theme';
import {
  SimplifiedTypeWithDefaultState,
  stylesFor,
  withDefaultBase,
  withDefaultSizes,
} from '../utilities/styles-creator';

type Size = 0 | 1 | 2;
export type DividerProps = DividerPrimitiveProps & { size?: Size };

const baseStyles = {
  height: 1,
  backgroundColor: theme.colors.gray300,
};

const sizes = [3, 6, 9].reduce(
  (acc, item, i): SimplifiedTypeWithDefaultState => ({
    ...acc,
    [i]: {
      maxWidth: theme.sizes[item],
    },
  }),
  {}
);

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>((props, forwardedRef) => (
  <DividerPrimitive
    {...props}
    ref={forwardedRef}
    styleConfig={stylesFor('container')(withDefaultBase(baseStyles), withDefaultSizes(sizes))}
  />
));
