import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop, Length } from '../utils/types';

export interface FontSizeProps {
  fontSize?: Prop<CSS.FontSizeProperty<Length>>;
}

const config: Config = {
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
  },
};

export const fontSize = system(config);
