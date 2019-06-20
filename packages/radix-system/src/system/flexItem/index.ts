import { system } from '@styled-system/core';
import { config as flexConfig, FlexProps } from './flex';
import { config as flexGrowConfig, FlexGrowProps } from './flexGrow';
import { config as flexShrinkConfig, FlexShrinkProps } from './flexShrink';
import { config as flexBasisConfig, FlexBasisProps } from './flexBasis';
import { config as alignSelfConfig, AlignSelfProps } from './alignSelf';
import { config as justifySelfConfig, JustifySelfProps } from './justifySelf';
import { config as orderConfig, OrderProps } from './order';

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
