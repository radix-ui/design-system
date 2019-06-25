import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../../utils/types';

export interface FlexGrowProps {
  flexGrow?: Prop<CSS.GlobalsNumber>;
}

export const config: Config = { flexGrow: true };

export const flexGrow = system(config);
