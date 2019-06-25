import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../../utils/types';

export interface GridColumnProps {
  gridColumn?: Prop<CSS.GridColumnProperty>;
}

export const config: Config = { gridColumn: true };

export const gridColumn = system(config);
