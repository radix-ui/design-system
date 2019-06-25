import { system } from '@styled-system/core';
import { config as positionConfig, PositionProps } from './position';
import { config as zIndexConfig, ZIndexProps } from './zIndex';
import { config as topConfig, TopProps } from './top';
import { config as rightConfig, RightProps } from './right';
import { config as bottomConfig, BottomProps } from './bottom';
import { config as leftConfig, LeftProps } from './left';

export interface PositionSetProps
  extends PositionProps,
    ZIndexProps,
    TopProps,
    RightProps,
    BottomProps,
    LeftProps {}

export const positionSet = system({
  ...positionConfig,
  ...zIndexConfig,
  ...topConfig,
  ...rightConfig,
  ...bottomConfig,
  ...leftConfig,
});
