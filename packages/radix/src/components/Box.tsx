import styled from 'styled-components';
import {
  alignSelf,
  AlignSelfProps,
  borders,
  BordersProps,
  bottom,
  BottomProps,
  boxShadow,
  BoxShadowProps,
  color,
  ColorProps,
  display,
  DisplayProps,
  flex,
  FlexProps,
  height,
  HeightProps,
  justifySelf,
  JustifySelfProps,
  left,
  LeftProps,
  maxWidth,
  MaxWidthProps,
  maxHeight,
  MaxHeightProps,
  minHeight,
  MinHeightProps,
  minWidth,
  MinWidthProps,
  opacity,
  OpacityProps,
  overflow,
  OverflowProps,
  position,
  PositionProps,
  right,
  RightProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  top,
  TopProps,
  width,
  WidthProps,
  zIndex,
  ZIndexProps,
} from 'styled-system';
import { ComponentProps } from 'react';

export type BoxProps = AlignSelfProps &
  BordersProps &
  BottomProps &
  BoxShadowProps &
  ColorProps &
  DisplayProps &
  FlexProps &
  HeightProps &
  JustifySelfProps &
  LeftProps &
  MaxWidthProps &
  MaxHeightProps &
  MinHeightProps &
  MinWidthProps &
  OpacityProps &
  OverflowProps &
  PositionProps &
  RightProps &
  SpaceProps &
  TextAlignProps &
  TopProps &
  WidthProps &
  ZIndexProps &
  ComponentProps<'div'> & { as?: any };

export const Box = styled('div')<BoxProps>(
  alignSelf,
  borders,
  bottom,
  boxShadow,
  color,
  display,
  flex,
  height,
  justifySelf,
  left,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  opacity,
  overflow,
  position,
  right,
  space,
  textAlign,
  top,
  width,
  zIndex
);
