import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop, Length } from '../../utils/types';

export interface GridRowGapProps {
  gridRowGap?: Prop<CSS.GridRowGapProperty<Length>>;
}

export const config: Config = {
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
  },
};

export const gridRowGap = system(config);
