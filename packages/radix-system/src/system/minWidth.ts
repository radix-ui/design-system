import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop, Length } from '../utils/types';

export interface MinWidthProps {
  minWidth?: Prop<CSS.MinWidthProperty<Length>>;
}

const config: Config = {
  minWidth: {
    property: 'minWidth',
    scale: 'sizes',
  },
};

export const minWidth = system(config);
