import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../utils/types';

export interface FontStyleProps {
  fontStyle?: Prop<CSS.FontStyleProperty>;
}

const config: Config = { fontStyle: true };

export const fontStyle = system(config);
