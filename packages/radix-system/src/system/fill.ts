import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../utils/types';

export interface FillProps {
  fill?: Prop<CSS.FillProperty>;
}

const config: Config = {
  fill: {
    property: 'fill',
    scale: 'colors',
  },
};

export const fill = system(config);
