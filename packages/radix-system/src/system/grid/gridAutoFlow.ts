import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../../utils/types';

export interface GridAutoFlowProps {
  gridAutoFlow?: Prop<CSS.GridAutoFlowProperty>;
}

export const config: Config = { gridAutoFlow: true };

export const gridAutoFlow = system(config);
