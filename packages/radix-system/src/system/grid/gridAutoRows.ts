import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop, Length } from '../../utils/types';

export interface GridAutoRowsProps {
  gridAutoRows?: Prop<CSS.GridAutoRowsProperty<Length>>;
}

export const config: Config = { gridAutoRows: true };

export const gridAutoRows = system(config);
