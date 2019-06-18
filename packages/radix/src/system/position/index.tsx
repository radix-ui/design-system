import { system } from 'styled-system';
import { config as positionConfig } from './position';
import { config as zIndexConfig } from './zIndex';
import { config as topConfig } from './top';
import { config as rightConfig } from './right';
import { config as bottomConfig } from './bottom';
import { config as leftConfig } from './left';
export { PositionProps as PositionSetProps } from 'styled-system';

export const positionSet = system({
  ...positionConfig,
  ...zIndexConfig,
  ...topConfig,
  ...rightConfig,
  ...bottomConfig,
  ...leftConfig,
});
