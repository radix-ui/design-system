import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop, Length } from '../utils/types';

export interface MinHeightProps {
  minHeight?: Prop<CSS.MinHeightProperty<Length>>;
}

const config: Config = {
  minHeight: {
    property: 'minHeight',
    scale: 'sizes',
  },
};

export const minHeight = system(config);
