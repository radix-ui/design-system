import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop, Length } from '../../utils/types';

export interface LeftProps {
  left?: Prop<CSS.LeftProperty<Length>>;
}

export const config: Config = { left: true };

export const left = system(config);
