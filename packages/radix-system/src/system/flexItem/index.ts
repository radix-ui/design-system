import {
  system,
  FlexProps,
  FlexGrowProps,
  FlexShrinkProps,
  FlexBasisProps,
  JustifySelfProps,
  AlignSelfProps,
  OrderProps,
} from '@styled-system/core';
import { config as flexConfig } from './flex';
import { config as flexGrowConfig } from './flexGrow';
import { config as flexShrinkConfig } from './flexShrink';
import { config as flexBasisConfig } from './flexBasis';
import { config as alignSelfConfig } from './alignSelf';
import { config as justifySelfConfig } from './justifySelf';
import { config as orderConfig } from './order';

export interface FlexItemSetProps
  extends FlexProps,
    FlexGrowProps,
    FlexShrinkProps,
    FlexBasisProps,
    JustifySelfProps,
    AlignSelfProps,
    OrderProps {}

export const flexItemSet = system({
  ...flexConfig,
  ...flexGrowConfig,
  ...flexShrinkConfig,
  ...flexBasisConfig,
  ...alignSelfConfig,
  ...justifySelfConfig,
  ...orderConfig,
});
