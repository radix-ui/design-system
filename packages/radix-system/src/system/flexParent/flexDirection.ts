import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../../utils/types';

export interface FlexDirectionProps {
  flexDirection?: Prop<CSS.FlexDirectionProperty>;
}

export const config: Config = { flexDirection: true };

export const flexDirection = system(config);
