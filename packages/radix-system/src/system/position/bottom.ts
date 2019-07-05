import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { getNegativeSpace } from '../../utils/getNegativeSpace';
import { Prop, Length } from '../../utils/types';

export interface BottomProps {
  bottom?: Prop<CSS.BottomProperty<Length>>;
}

export const config: Config = {
  bottom: {
    property: 'bottom',
    scale: 'space',
    transform: getNegativeSpace,
  },
};

export const bottom = system(config);
