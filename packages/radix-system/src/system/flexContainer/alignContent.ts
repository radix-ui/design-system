import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../../utils/types';

export interface AlignContentProps {
  alignContent?: Prop<CSS.AlignContentProperty>;
}

export const config: Config = { alignContent: true };

export const alignContent = system(config);
