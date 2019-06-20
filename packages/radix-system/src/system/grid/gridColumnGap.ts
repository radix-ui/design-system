import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop, Length } from '../../utils/types';

export interface GridColumnGapProps {
  gridColumnGap?: Prop<CSS.GridColumnGapProperty<Length>>;
}

export const config: Config = {
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
  },
};

export const gridColumnGap = system(config);
