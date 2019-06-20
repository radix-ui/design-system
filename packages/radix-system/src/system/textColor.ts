import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../utils/types';

export interface TextColorProps {
  textColor?: Prop<CSS.ColorProperty>;
}

const config: Config = {
  textColor: {
    property: 'color',
    scale: 'colors',
  },
};

export const textColor = system(config);
