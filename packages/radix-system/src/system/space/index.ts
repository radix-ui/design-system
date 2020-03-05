import { system } from '@styled-system/core';
import { config as marginConfig, MarginProps } from './margin';
import { config as paddingConfig, PaddingProps } from './padding';

export interface SpaceSetProps extends MarginProps, PaddingProps {}

export const spaceSet = system({
  ...marginConfig,
  ...paddingConfig,
});
