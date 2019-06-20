import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop, Length } from '../utils/types';

export interface BorderProps {
  border?: Prop<CSS.BorderProperty<Length>>;
  borderWidth?: Prop<CSS.BorderWidthProperty<Length>>;
  borderStyle?: Prop<CSS.BorderStyleProperty>;
  borderColor?: Prop<CSS.BorderColorProperty>;
  borderTop?: Prop<CSS.BorderTopProperty<Length>>;
  borderRight?: Prop<CSS.BorderRightProperty<Length>>;
  borderBottom?: Prop<CSS.BorderBottomProperty<Length>>;
  borderLeft?: Prop<CSS.BorderLeftProperty<Length>>;
  borderX?: Prop<CSS.BorderProperty<Length>>;
  borderY?: Prop<CSS.BorderProperty<Length>>;
}

const config: Config = {
  border: {
    property: 'border',
    scale: 'borders',
  },
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths',
  },
  borderStyle: {
    property: 'borderStyle',
    scale: 'borderStyles',
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors',
  },
  borderTop: {
    property: 'borderTop',
    scale: 'borders',
  },
  borderRight: {
    property: 'borderRight',
    scale: 'borders',
  },
  borderBottom: {
    property: 'borderBottom',
    scale: 'borders',
  },
  borderLeft: {
    property: 'borderLeft',
    scale: 'borders',
  },
  borderX: {
    properties: ['borderLeft', 'borderRight'],
    scale: 'borders',
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
    scale: 'borders',
  },
};

export const border = system(config);
