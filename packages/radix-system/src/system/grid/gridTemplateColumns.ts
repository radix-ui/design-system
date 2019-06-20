import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop, Length } from '../../utils/types';

export interface GridTemplateColumnsProps {
  gridTemplateColumns?: Prop<CSS.GridTemplateColumnsProperty<Length>>;
}

export const config: Config = { gridTemplateColumns: true };

export const gridTemplateColumns = system(config);
