import styled from 'styled-components';
import {
  border,
  BorderProps,
  borderRadius,
  BorderRadiusProps,
  boxShadow,
  BoxShadowProps,
  backgroundColor,
  BackgroundColorProps,
  display,
  DisplayProps,
  opacity,
  OpacityProps,
  height,
  HeightProps,
  justifySelf,
  JustifySelfProps,
  margin,
  MarginProps,
  maxWidth,
  MaxWidthProps,
  maxHeight,
  MaxHeightProps,
  minHeight,
  MinHeightProps,
  minWidth,
  MinWidthProps,
  overflow,
  OverflowProps,
  padding,
  PaddingProps,
  positionSet,
  PositionSetProps,
  textAlign,
  TextAlignProps,
  textColor,
  TextColorProps,
  width,
  WidthProps,
  flexItemSet,
  FlexItemSetProps,
  compose,
} from '@modulz/radix-system';
import { ComponentProps } from 'react';

export type BoxProps = BorderProps &
  BorderRadiusProps &
  BoxShadowProps &
  BackgroundColorProps &
  TextColorProps &
  DisplayProps &
  HeightProps &
  JustifySelfProps &
  MarginProps &
  MaxWidthProps &
  MaxHeightProps &
  MinHeightProps &
  MinWidthProps &
  OpacityProps &
  OverflowProps &
  PaddingProps &
  TextAlignProps &
  WidthProps &
  PositionSetProps &
  FlexItemSetProps &
  ComponentProps<'div'> & { as?: any };

const styleProps = compose(
  border,
  borderRadius,
  boxShadow,
  backgroundColor,
  textColor,
  display,
  height,
  justifySelf,
  margin,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  opacity,
  overflow,
  padding,
  textAlign,
  width,
  positionSet,
  flexItemSet
);

export const Box = styled('div')<BoxProps>(styleProps);
