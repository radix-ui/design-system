import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop, Length } from '../utils/types';

export interface MaxWidthProps {
  maxWidth?: Prop<CSS.MaxWidthProperty<Length>>;
}

const config: Config = {
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes',
  },
};

export const maxWidth = system(config);
