import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop, Length } from '../utils/types';

export interface BorderRadiusProps {
  borderRadius?: Prop<CSS.BorderRadiusProperty<Length>>;
}

const config: Config = {
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii',
  },
};

export const borderRadius = system(config);
