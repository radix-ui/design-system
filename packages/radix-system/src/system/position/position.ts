import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../../utils/types';

export interface PositionProps {
  position?: Prop<CSS.PositionProperty>;
}

export const config: Config = { position: true };

export const position = system(config);
