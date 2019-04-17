import styled from "styled-components";
import {
  color,
  space,
  fontSize,
  fontFamily,
  fontStyle,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  themeGet
} from "styled-system";
import { theme, themeColor } from "../theme";

export const Text = styled.span`
	font-family: ${themeGet("fonts.normal")};
	font-size: ${themeGet("fontSizes.4")};
	color: ${themeColor("grays.7")};
	margin: 0;
	padding: 0;

	${color}
	${space}
	${fontSize}
	${fontStyle}
	${fontFamily}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}
  ${letterSpacing}
`;

Text.defaultProps = { theme };
