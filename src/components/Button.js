import React from "react";
import styled from "styled-components/macro";
import { theme } from "../theme";
import { space, color, buttonStyle } from "styled-system";

export const Button = styled.button`
  align-items: center;
	appearance: none;
	background-color: ${theme.colors.grays[0]};
	box-shadow: inset 0 0 0 1px ${theme.colors.grays[3]};
	border: none;
	border-radius: ${theme.radii[1]};
	color: ${theme.colors.grays[5]};
	cursor: pointer;
	display: inline-flex;
	flex-shrink: 0;
	font-family: ${theme.UNTITLEDSANSMEDIUM}; /* missing in theme */
	font-size: ${theme.fontSizes[2]};
	font-weight: 500;
	height: ${theme.space[5]};
	justify-content: center;
	line-height: 1;
	min-width: ${theme.space[5]};
	outline: none;
	padding: 0 ${theme.space[2]};
	position: relative;
	text-align: center;
	text-decoration: none;
	user-select: none;
	vertical-align: middle;
	white-space: nowrap;

	&:hover {
    box-shadow: inset 0 0 0 1px ${theme.colors.grays[4]};
  }

  &:active {
    background-color: ${theme.colors.grays[1]};
    box-shadow: inset 0 0 0 1px ${theme.colors.grays[4]};
	}

	&:disabled {
    background-color: ${theme.colors.grays[1]};
    box-shadow: inset 0 0 0 1px ${theme.colors.grays[2]};
    color: ${theme.colors.grays[4]};
    cursor: not-allowed;
  }

	${space}
	${color}
	${buttonStyle}
`;

Button.defaultProps = {
  theme,
};

// export const BlueButton = props => (
//   <Button
//     {...props}
//     color="blues.5"
//     bg="blues.0"
//     css={`
//       box-shadow: inset 0 0 0 1px ${theme.colors.blues[3]};
//     `}
//   >
//     {props.children}
//   </Button>
// );

export const MediumButton = props => (
  <Button
    {...props}
    fontSize="fontSizes.3"
    pa={3}
    css={`
      height: ${theme.space[6]};
      min-width: ${theme.space[6]};
    `}
  >
    {props.children}
  </Button>
);
