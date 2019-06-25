import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../utils/types';

export interface DisplayProps {
  display?: Prop<CSS.DisplayProperty>;
}

const config: Config = { display: true };

export const display = system(config);
