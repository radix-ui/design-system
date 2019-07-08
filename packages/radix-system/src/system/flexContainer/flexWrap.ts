import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../../utils/types';

export interface FlexWrapProps {
  flexWrap?: Prop<CSS.FlexWrapProperty>;
}

export const config: Config = { flexWrap: true };

export const flexWrap = system(config);
