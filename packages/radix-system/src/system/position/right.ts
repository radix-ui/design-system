import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop, Length } from '../../utils/types';

export interface RightProps {
  right?: Prop<CSS.RightProperty<Length>>;
}

export const config: Config = { right: true };

export const right = system(config);
