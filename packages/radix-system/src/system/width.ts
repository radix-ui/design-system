import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop, Length } from '../utils/types';

export interface WidthProps {
  width?: Prop<CSS.WidthProperty<Length>>;
}

const config: Config = {
  width: {
    property: 'width',
    scale: 'sizes',
  },
};

export const width = system(config);
