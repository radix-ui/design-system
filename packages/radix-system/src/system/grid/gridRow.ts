import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../../utils/types';

export interface GridRowProps {
  gridRow?: Prop<CSS.GridRowProperty>;
}

export const config: Config = { gridRow: true };

export const gridRow = system(config);
