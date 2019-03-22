import styled from "styled-components/macro";
import { theme } from "../theme";
import {
  borders,
  bottom,
  boxShadow,
  color,
  display,
  flex,
  height,
  left,
  opacity,
  overflow,
  position,
  right,
  space,
  textAlign,
  top,
  width,
  zIndex,
  justifySelf,
  alignSelf,
} from "styled-system";

export const Box = styled.div`
	${borders}
  ${bottom}
  ${boxShadow}
  ${color}
  ${display}
  ${flex}
  ${height}
  ${left}
  ${opacity}
  ${overflow}
  ${position}
  ${right}
  ${space}
  ${textAlign}
  ${top}
  ${width}
  ${zIndex}
  ${justifySelf}
  ${alignSelf}
`;

Box.defaultProps = {
  theme,
};
