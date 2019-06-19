import {
  system,
  AlignItemsProps,
  AlignContentProps,
  JustifyItemsProps,
  JustifyContentProps,
  FlexWrapProps,
  FlexDirectionProps,
} from 'styled-system';
import { config as alignContentConfig } from './alignContent';
import { config as alignItemsConfig } from './alignItems';
import { config as flexDirectionConfig } from './flexDirection';
import { config as flexWrapConfig } from './flexWrap';
import { config as justifyContentConfig } from './justifyContent';
import { config as justifyItemsConfig } from './justifyItems';

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
