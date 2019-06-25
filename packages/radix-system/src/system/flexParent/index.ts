import { system } from '@styled-system/core';
import { config as alignContentConfig, AlignContentProps } from './alignContent';
import { config as alignItemsConfig, AlignItemsProps } from './alignItems';
import { config as flexDirectionConfig, FlexDirectionProps } from './flexDirection';
import { config as flexWrapConfig, FlexWrapProps } from './flexWrap';
import { config as justifyContentConfig, JustifyContentProps } from './justifyContent';
import { config as justifyItemsConfig, JustifyItemsProps } from './justifyItems';

export interface FlexParentSetProps
  extends AlignItemsProps,
    AlignContentProps,
    JustifyItemsProps,
    JustifyContentProps,
    FlexWrapProps,
    FlexDirectionProps {}

export const flexParentSet = system({
  ...alignContentConfig,
  ...alignItemsConfig,
  ...flexDirectionConfig,
  ...flexWrapConfig,
  ...justifyContentConfig,
  ...justifyItemsConfig,
});
