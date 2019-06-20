import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../../utils/types';

export interface OrderProps {
  order?: Prop<CSS.GlobalsNumber>;
}

export const config: Config = { order: true };

export const order = system(config);
