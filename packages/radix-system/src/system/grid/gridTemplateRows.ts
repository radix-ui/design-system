import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop, Length } from '../../utils/types';

export interface GridTemplateRowsProps {
  gridTemplateRows?: Prop<CSS.GridTemplateRowsProperty<Length>>;
}

export const config: Config = { gridTemplateRows: true };

export const gridTemplateRows = system(config);
