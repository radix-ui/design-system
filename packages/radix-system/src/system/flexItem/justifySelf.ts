import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../../utils/types';

export interface JustifySelfProps {
  justifySelf?: Prop<CSS.JustifySelfProperty>;
}

export const config: Config = { justifySelf: true };

export const justifySelf = system(config);
