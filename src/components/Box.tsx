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

type BoxProps = AlignSelfProps &
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
  OpacityProps &
  OverflowProps &
  PositionProps &
  RightProps &
  SpaceProps &
  TextAlignProps &
  TopProps &
  WidthProps &
  ZIndexProps;

export const Box = styled.div<BoxProps>`
	${alignSelf}
	${borders}
	${bottom}
	${boxShadow}
	${color}
	${display}
	${flex}
	${height}
	${justifySelf}
	${left}
	${maxWidth}
	${opacity}
	${overflow}
	${position}
	${right}
	${space}
	${textAlign}
	${top}
	${width}
	${zIndex}
`;
