import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop, Length } from '../../utils/types';

export interface BottomProps {
  bottom?: Prop<CSS.BottomProperty<Length>>;
}

export const config: Config = { bottom: true };

export const bottom = system(config);
