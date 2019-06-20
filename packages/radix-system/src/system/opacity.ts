import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../utils/types';

export interface OpacityProps {
  opacity?: Prop<CSS.GlobalsNumber>;
}

const config: Config = {
  opacity: true,
};

export const opacity = system(config);
