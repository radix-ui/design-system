import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../utils/types';

export interface FontFamilyProps {
  fontFamily?: Prop<CSS.FontFamilyProperty>;
}

const config: Config = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts',
  },
};

export const fontFamily = system(config);
