import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../utils/types';

export interface OverflowProps {
  overflow?: Prop<CSS.OverflowProperty>;
}

const config: Config = { overflow: true };

export const overflow = system(config);
