import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { getNegativeSpace } from '../../utils/getNegativeSpace';
import { Prop, Length } from '../../utils/types';

export interface RightProps {
  right?: Prop<CSS.RightProperty<Length>>;
}

export const config: Config = {
  right: {
    property: 'right',
    scale: 'space',
    transform: getNegativeSpace,
  },
};

export const right = system(config);
