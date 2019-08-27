import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { getNegativeSpace } from '../../utils/getNegativeSpace';
import { Prop, Length } from '../../utils/types';

export interface LeftProps {
  left?: Prop<CSS.LeftProperty<Length>>;
}

export const config: Config = {
  left: {
    property: 'left',
    scale: 'space',
    transform: getNegativeSpace,
  },
};

export const left = system(config);
