import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop, Length } from '../../utils/types';

export interface GridAutoColumnsProps {
  gridAutoColumns?: Prop<CSS.GridAutoColumnsProperty<Length>>;
}

export const config: Config = { gridAutoColumns: true };

export const gridAutoColumns = system(config);
