import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop, Length } from '../../utils/types';

export interface PaddingProps {
  p?: Prop<CSS.PaddingProperty<Length>>;
  padding?: Prop<CSS.PaddingProperty<Length>>;
  pt?: Prop<CSS.PaddingTopProperty<Length>>;
  paddingTop?: Prop<CSS.PaddingTopProperty<Length>>;
  pr?: Prop<CSS.PaddingRightProperty<Length>>;
  paddingRight?: Prop<CSS.PaddingRightProperty<Length>>;
  pb?: Prop<CSS.PaddingBottomProperty<Length>>;
  paddingBottom?: Prop<CSS.PaddingBottomProperty<Length>>;
  pl?: Prop<CSS.PaddingLeftProperty<Length>>;
  paddingLeft?: Prop<CSS.PaddingLeftProperty<Length>>;
  px?: Prop<CSS.PaddingProperty<Length>>;
  paddingX?: Prop<CSS.PaddingProperty<Length>>;
  py?: Prop<CSS.PaddingProperty<Length>>;
  paddingY?: Prop<CSS.PaddingProperty<Length>>;
}

export const config: Config = {
  padding: {
    property: 'padding',
    scale: 'space',
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'space',
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'space',
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'space',
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'space',
  },
  paddingX: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space',
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space',
  },
};

config.p = config.padding;
config.pt = config.paddingTop;
config.pr = config.paddingRight;
config.pb = config.paddingBottom;
config.pl = config.paddingLeft;
config.px = config.paddingX;
config.py = config.paddingY;

export const padding = system(config);
