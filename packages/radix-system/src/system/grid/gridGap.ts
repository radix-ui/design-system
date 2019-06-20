import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop, Length } from '../../utils/types';

export interface GridGapProps {
  gridGap?: Prop<CSS.GridGapProperty<Length>>;
}

export const config: Config = {
  gridGap: {
    property: 'gridGap',
    scale: 'space',
  },
};

export const gridGap = system(config);
