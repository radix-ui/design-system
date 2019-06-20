import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop, Length } from '../utils/types';

export interface LineHeightProps {
  lineHeight?: Prop<CSS.LineHeightProperty<Length>>;
}

const config: Config = {
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights',
  },
};

export const lineHeight = system(config);
