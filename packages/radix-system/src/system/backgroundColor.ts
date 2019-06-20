import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../utils/types';

export interface BackgroundColorProps {
  backgroundColor?: Prop<CSS.BackgroundColorProperty>;
  bg?: Prop<CSS.BackgroundColorProperty>;
}

const config: Config = {
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
};
config.bg = config.backgroundColor;

export const backgroundColor = system(config);
