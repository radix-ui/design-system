import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop, Length } from '../utils/types';

export interface MaxHeightProps {
  maxHeight?: Prop<CSS.MaxHeightProperty<Length>>;
}

const config: Config = {
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes',
  },
};

export const maxHeight = system(config);
