import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../utils/types';

export interface TextAlignProps {
  textAlign?: Prop<CSS.TextAlignProperty>;
}

const config: Config = { textAlign: true };

export const textAlign = system(config);
