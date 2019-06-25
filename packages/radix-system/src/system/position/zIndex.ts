import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../../utils/types';

export interface ZIndexProps {
  zIndex?: Prop<CSS.ZIndexProperty>;
}

export const config: Config = {
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices',
  },
};

export const zIndex = system(config);
