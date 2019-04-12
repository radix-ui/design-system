import styled, { css } from "styled-components";
import { color, space, width, maxWidth, textAlign, themeGet, variant } from "styled-system";
import { theme, themeColor } from "../theme";

theme.inputs = {
  ghost: {
    boxShadow: "none",
    "&:focus": {
      boxShadow: "none",
    },
  },
};

theme.inputSizes = {
  medium: {
    fontSize: themeGet("fontSizes.3")({ theme }),
    height: themeGet("space.6")({ theme }),
    lineHeight: themeGet("space.6")({ theme }),
  },
};

const placeholderStyle = css`
  color: ${themeColor("grays.4")};
  opacity: 1;
`;

const inputStyle = variant({ key: "inputs", prop: "variant" });
const inputSizeStyle = variant({ key: "inputSizes", prop: "size" });

export const Input = styled.input`
  appearance: none;
  background-color: transparent;
  border: none;
  border-radius: 0;
  box-shadow: inset 0 -1px 0 0 ${themeColor("grays.3")};
  font-family: ${themeGet("fonts.normal")};
  font-size: ${themeGet("fontSizes.2")};
  height: ${themeGet("space.5")};
  line-height: ${themeGet("space.5")};
  outline: none;
  padding: 0;
  vertical-align: middle;
  width: 100%;
	box-sizing: border-box;

  &::-webkit-input-placeholder {
    ${placeholderStyle}
  }
  &::-moz-placeholder {
    ${placeholderStyle}
  }
  &:-ms-input-placeholder {
    ${placeholderStyle}
  }

  &:focus {
    box-shadow: inset 0 -1px 0 0 ${themeColor("blues.4")};
  }

  &:read-only {
    box-shadow: inset 0 -1px 0 0 ${themeColor("grays.2")};
    color: ${themeColor("grays.5")};
  }

  &:disabled {
    box-shadow: inset 0 -1px 0 0 ${themeColor("grays.2")};
    color: ${themeColor("grays.4")};
    cursor: not-allowed;
  }

  ${color}
  ${space}
  ${textAlign}
  ${width}
  ${maxWidth}
	${inputStyle}
	${inputSizeStyle}
`;

Input.defaultProps = { type: "text", theme };
