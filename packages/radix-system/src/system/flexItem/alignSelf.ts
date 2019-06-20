import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../../utils/types';

export interface AlignSelfProps {
  alignSelf?: Prop<CSS.AlignSelfProperty>;
}

export const config: Config = { alignSelf: true };

export const alignSelf = system(config);
