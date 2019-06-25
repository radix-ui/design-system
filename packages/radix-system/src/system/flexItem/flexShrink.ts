import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../../utils/types';

export interface FlexShrinkProps {
  flexShrink?: Prop<CSS.GlobalsNumber>;
}

export const config: Config = { flexShrink: true };

export const flexShrink = system(config);
