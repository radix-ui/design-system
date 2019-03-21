import React from "react";
import styled from "styled-components/macro";
import { theme, getColor } from "../theme";
import { space, color, buttonStyle, themeGet } from "styled-system";

// Button "style" variants
// https://styled-system.com/theme-specification#element-variants
theme.buttons = {
  blue: {
    color: getColor("blues.5"),
    backgroundColor: getColor("blues.0"),
    boxShadow: `inset 0 0 0 1px ${getColor("blues.3")}`,
    "&:hover": {
      boxShadow: `inset 0 0 0 1px ${getColor("blues.4")}`,
    },
    "&:active": {
      backgroundColor: getColor("blues.1"),
      boxShadow: `inset 0 0 0 1px ${getColor("blues.4")}`,
    },
  },
  green: {
    color: getColor("greens.5"),
    backgroundColor: getColor("greens.0"),
    boxShadow: `inset 0 0 0 1px ${getColor("greens.3")}`,
    "&:hover": {
      boxShadow: `inset 0 0 0 1px ${getColor("greens.4")}`,
    },
    "&:active": {
      backgroundColor: getColor("greens.1"),
      boxShadow: `inset 0 0 0 1px ${getColor("greens.4")}`,
    },
  },
  yellow: {
    color: getColor("yellows.5"),
  },
  red: {
    color: getColor("reds.5"),
  },
  active: {
    color: getColor("grays.5"),
    backgroundColor: getColor("grays.1"),
    boxShadow: `inset 0 1px 1px 0 ${getColor("blacks.4")}, inset 0 0 0 1px ${getColor("grays.3")}`,
    "&:hover": {
      boxShadow: `inset 0 1px 1px 0 ${getColor("blacks.4")}, inset 0 0 0 1px ${getColor(
        "grays.4"
      )}`,
    },
    "&:active": {
      backgroundColor: getColor("grays.2"),
    },
  },
};

export const Button = styled.button`
  align-items: center;
	appearance: none;
	background-color: ${getColor("grays.0")};
	box-shadow: inset 0 0 0 1px ${getColor("grays.3")};
	border: none;
	border-radius: ${themeGet("radii.1")};
	color: ${getColor("grays.5")};
	cursor: pointer;
	display: inline-flex;
	flex-shrink: 0;
	/* font-family: ${theme.UNTITLEDSANSMEDIUM}; missing in theme */
	font-size: ${themeGet("fontSizes.2")};
	font-weight: 500;
	height: ${themeGet("space.5")};
	justify-content: center;
	line-height: 1;
	min-width: ${themeGet("space.5")};
	outline: none;
	padding: 0 ${themeGet("space.2")};
	position: relative;
	text-align: center;
	text-decoration: none;
	user-select: none;
	vertical-align: middle;
	white-space: nowrap;

	&:hover {
    box-shadow: inset 0 0 0 1px ${getColor("grays.4")};
  }

  &:active {
    background-color: ${getColor("grays.1")};
    box-shadow: inset 0 0 0 1px ${getColor("grays.4")};
	}

	&:disabled {
    background-color: ${getColor("grays.1")};
    box-shadow: inset 0 0 0 1px ${getColor("grays.2")};
    color: ${getColor("grays.4")};
    cursor: not-allowed;
  }

	${space}
	${color}
	${buttonStyle}
`;

Button.defaultProps = {
  theme,
};

export const MediumButton = props => (
  <Button
    {...props}
    fontSize="fontSizes.3"
    pa={3}
    css={`
      height: ${themeGet("space.6")};
      min-width: ${themeGet("space.6")};
    `}
  >
    {props.children}
  </Button>
);
