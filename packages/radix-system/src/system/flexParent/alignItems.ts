import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../../utils/types';

export interface AlignItemsProps {
  alignItems?: Prop<CSS.AlignItemsProperty>;
}

export const config: Config = { alignItems: true };

export const alignItems = system(config);
