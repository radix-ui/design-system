import styled, { css, keyframes } from "styled-components/macro";
import { theme, themeColor } from "../theme";
import { space, buttonStyle, themeGet, variant } from "styled-system";

const waitingAnimation = props => keyframes`
  100% {
    transform: translateX(${
      props.size === "medium" ? themeGet("space.9")(props) : themeGet("space.7")(props)
    })
	}
`;

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

theme.sizes = {
  medium: {
    fontSize: themeGet("fontSizes.3")({ theme }),
    padding: `0 ${themeGet("space.3")({ theme })}`,
    height: themeGet("space.6")({ theme }),
    minWidth: themeGet("space.6")({ theme }),
  },
};

const buttonSizeStyle = variant({ key: "sizes", prop: "size" });

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
	/* TODO: add font-family: ${theme.UNTITLEDSANSMEDIUM}; missing in theme */
	font-size: ${themeGet("fontSizes.2")};
	font-weight: 500;
	height: ${themeGet("space.5")};
	line-height: 1;
	min-width: ${themeGet("space.5")};
	outline: none;
	padding: 0 ${themeGet("space.2")};
	position: relative;
	text-align: center;
	text-decoration: none;
	user-select: none;

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
	${buttonStyle}
	${buttonSizeStyle}

	${props =>
    props.waiting &&
    css`
			background-color: ${themeColor("grays.2")};
			box-shadow: inset 0 1px 1px 0 ${themeColor("blacks.4")}, inset 0 0 0 1px ${themeColor("grays.4")};
    	color: transparent
			overflow: hidden;
			pointer-events: none;
			position: relative;

			&::before {
				position: absolute;
				content: " ";
				top: 0;
				left: -100%;
				width: 200%;
				height: 100%;
				background-image: linear-gradient(
					-45deg,
					transparent 33%,
					rgba(0, 0, 0, 0.05) 33%,
					rgba(0, 0, 0, 0.05) 66%,
					transparent 66%
				);
				background-size: ${props =>
          props.size === "medium"
            ? `${themeGet("space.9")(props)} ${themeGet("space.6")(props)}`
            : `${themeGet("space.7")(props)} ${themeGet("space.5")(props)}`}
				animation: ${waitingAnimation} 500ms linear infinite;
		`}
`;

Button.defaultProps = {
  theme,
};
