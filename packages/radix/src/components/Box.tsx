import styled from 'styled-components';
import { compose } from 'styled-system';
import {
  alignSelf,
  AlignSelfProps,
  border,
  BorderProps,
  boxShadow,
  BoxShadowProps,
  backgroundColor,
  BackgroundColorProps,
  display,
  DisplayProps,
  flex,
  FlexProps,
  flexGrow,
  FlexGrowProps,
  flexShrink,
  FlexShrinkProps,
  flexBasis,
  FlexBasisProps,
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
} from '../system';
import { ComponentProps } from 'react';

export type BoxProps = AlignSelfProps &
  BorderProps &
  BoxShadowProps &
  BackgroundColorProps &
  TextColorProps &
  DisplayProps &
  FlexProps &
  FlexGrowProps &
  FlexShrinkProps &
  FlexBasisProps &
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
  PositionSetProps &
  TextAlignProps &
  WidthProps &
  ComponentProps<'div'> & { as?: any };

const styleProps = compose(
  alignSelf,
  border,
  boxShadow,
  backgroundColor,
  textColor,
  display,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
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
  positionSet
);

export const Box = styled('div')<BoxProps>(styleProps);
