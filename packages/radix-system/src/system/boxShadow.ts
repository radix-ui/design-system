import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../utils/types';

export interface BoxShadowProps {
  boxShadow?: Prop<CSS.BoxShadowProperty>;
}

const config: Config = {
  boxShadow: {
    property: 'boxShadow',
    scale: 'shadows',
  },
};

export const boxShadow = system(config);
