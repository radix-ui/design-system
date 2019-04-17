import styled from "styled-components";
import {
  color,
  space,
  fontSize,
  textAlign,
  lineHeight,
  fontWeight,
  themeGet
} from "styled-system";
import { theme, themeColor } from "../theme";

export const Heading = styled.h1`
	color: ${themeColor("grays.8")};
  font-family: ${themeGet("fonts.normal")};
  margin: 0;

	${color}
	${space}
	${fontSize}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}
`;

Heading.defaultProps = { theme };
