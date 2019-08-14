import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop, Length } from '../utils/types';

export interface BorderRadiusProps {
  borderRadius?: Prop<CSS.BorderRadiusProperty<Length>>;
  borderTopLeftRadius?: Prop<CSS.BorderTopLeftRadiusProperty<Length>>;
  borderTopRightRadius?: Prop<CSS.BorderTopRightRadiusProperty<Length>>;
  borderBottomLeftRadius?: Prop<CSS.BorderBottomLeftRadiusProperty<Length>>;
  borderBottomRightRadius?: Prop<CSS.BorderBottomRightRadiusProperty<Length>>;
}

const config: Config = {
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii',
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii',
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii',
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii',
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii',
  },
};

export const borderRadius = system(config);
