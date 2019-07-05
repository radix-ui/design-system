import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../utils/types';

export interface FontWeightProps {
  fontWeight?: Prop<CSS.FontWeightProperty>;
}

const config: Config = {
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights',
  },
};

export const fontWeight = system(config);
