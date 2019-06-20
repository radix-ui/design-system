import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../../utils/types';

export interface GridAreaProps {
  gridArea?: Prop<CSS.GridAreaProperty>;
}

export const config: Config = { gridArea: true };

export const gridArea = system(config);
