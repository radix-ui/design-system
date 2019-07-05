import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { getNegativeSpace } from '../../utils/getNegativeSpace';
import { Prop, Length } from '../../utils/types';

export interface TopProps {
  top?: Prop<CSS.TopProperty<Length>>;
}

export const config: Config = {
  top: {
    property: 'top',
    scale: 'space',
    transform: getNegativeSpace,
  },
};

export const top = system(config);
