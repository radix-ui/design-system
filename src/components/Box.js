import styled from "styled-components";
import { theme } from "../theme";
import {
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
  maxWidth,
  opacity,
  overflow,
  position,
  right,
  space,
  textAlign,
  top,
  width,
  zIndex,
} from "styled-system";

export const Box = styled.div`
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

Box.defaultProps = {
  theme,
};
