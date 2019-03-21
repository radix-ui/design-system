import React from "react";
import styled from "styled-components/macro";
import { theme, themeColor } from "../theme";
import { space, color, buttonStyle, themeGet } from "styled-system";

// Button "style" variants
// https://styled-system.com/theme-specification#element-variants
theme.buttons = {
  blue: {
    color: themeColor("blues.5"),
    backgroundColor: themeColor("blues.0"),
    boxShadow: `inset 0 0 0 1px ${themeColor("blues.3")}`,
    "&:hover": {
      boxShadow: `inset 0 0 0 1px ${themeColor("blues.4")}`,
    },
    "&:active": {
      backgroundColor: themeColor("blues.1"),
      boxShadow: `inset 0 0 0 1px ${themeColor("blues.4")}`,
    },
  },
  green: {
    color: themeColor("greens.5"),
    backgroundColor: themeColor("greens.0"),
    boxShadow: `inset 0 0 0 1px ${themeColor("greens.3")}`,
    "&:hover": {
      boxShadow: `inset 0 0 0 1px ${themeColor("greens.4")}`,
    },
    "&:active": {
      backgroundColor: themeColor("greens.1"),
      boxShadow: `inset 0 0 0 1px ${themeColor("greens.4")}`,
    },
  },
  yellow: {
    color: themeColor("yellows.5"),
  },
  red: {
    color: themeColor("reds.5"),
  },
  active: {
    color: themeColor("grays.5"),
    backgroundColor: themeColor("grays.1"),
    boxShadow: `inset 0 1px 1px 0 ${themeColor("blacks.4")}, inset 0 0 0 1px ${themeColor(
      "grays.3"
    )}`,
    "&:hover": {
      boxShadow: `inset 0 1px 1px 0 ${themeColor("blacks.4")}, inset 0 0 0 1px ${themeColor(
        "grays.4"
      )}`,
    },
    "&:active": {
      backgroundColor: themeColor("grays.2"),
    },
  },
};

export const Button = styled.button`
  align-items: center;
	appearance: none;
	background-color: ${themeColor("grays.0")};
	box-shadow: inset 0 0 0 1px ${themeColor("grays.3")};
	border: none;
	border-radius: ${themeGet("radii.1")};
	color: ${themeColor("grays.5")};
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
    box-shadow: inset 0 0 0 1px ${themeColor("grays.4")};
  }

  &:active {
    background-color: ${themeColor("grays.1")};
    box-shadow: inset 0 0 0 1px ${themeColor("grays.4")};
	}

	&:disabled {
    background-color: ${themeColor("grays.1")};
    box-shadow: inset 0 0 0 1px ${themeColor("grays.2")};
    color: ${themeColor("grays.4")};
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
