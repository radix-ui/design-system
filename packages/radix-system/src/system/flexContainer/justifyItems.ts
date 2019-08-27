import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../../utils/types';

export interface JustifyItemsProps {
  justifyItems?: Prop<CSS.JustifyItemsProperty>;
}

export const config: Config = { justifyItems: true };

export const justifyItems = system(config);
