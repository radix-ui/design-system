import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop, Length } from '../../utils/types';

export interface FlexProps {
  flex?: Prop<CSS.FlexProperty<Length>>;
}

export const config: Config = { flex: true };

export const flex = system(config);
