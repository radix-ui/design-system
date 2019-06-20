import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop, Length } from '../utils/types';

export interface HeightProps {
  height?: Prop<CSS.HeightProperty<Length>>;
}

const config: Config = {
  height: {
    property: 'height',
    scale: 'sizes',
  },
};

export const height = system(config);
