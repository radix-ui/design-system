import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { getMargin } from '../utils/getMargin';
import { Prop, Length } from '../utils/types';

export interface MarginProps {
  m?: Prop<CSS.MarginProperty<Length>>;
  margin?: Prop<CSS.MarginProperty<Length>>;
  mt?: Prop<CSS.MarginTopProperty<Length>>;
  marginTop?: Prop<CSS.MarginTopProperty<Length>>;
  mr?: Prop<CSS.MarginRightProperty<Length>>;
  marginRight?: Prop<CSS.MarginRightProperty<Length>>;
  mb?: Prop<CSS.MarginBottomProperty<Length>>;
  marginBottom?: Prop<CSS.MarginBottomProperty<Length>>;
  ml?: Prop<CSS.MarginLeftProperty<Length>>;
  marginLeft?: Prop<CSS.MarginLeftProperty<Length>>;
  mx?: Prop<CSS.MarginProperty<Length>>;
  marginX?: Prop<CSS.MarginProperty<Length>>;
  my?: Prop<CSS.MarginProperty<Length>>;
  marginY?: Prop<CSS.MarginProperty<Length>>;
}

const config: Config = {
  margin: {
    property: 'margin',
    scale: 'space',
    transform: getMargin,
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transform: getMargin,
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transform: getMargin,
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transform: getMargin,
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transform: getMargin,
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: getMargin,
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: getMargin,
  },
};

config.m = config.margin;
config.mt = config.marginTop;
config.mr = config.marginRight;
config.mb = config.marginBottom;
config.ml = config.marginLeft;
config.mx = config.marginX;
config.my = config.marginY;

export const margin = system(config);
