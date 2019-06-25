import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop, Length } from '../../utils/types';

export interface TopProps {
  top?: Prop<CSS.TopProperty<Length>>;
}

export const config: Config = { top: true };

export const top = system(config);
