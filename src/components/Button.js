import merge from 'lodash.merge';
import styled, { css, keyframes } from 'styled-components';
import { space, buttonStyle, themeGet, variant, Theme } from 'styled-system';

export function makeButtons(theme: Theme) {
  return merge(
    {
      blue: {
        color: themeGet('colors.blues.5')({ theme }),
        backgroundColor: themeGet('colors.blues.0')({ theme }),
        boxShadow: `inset 0 0 0 1px ${themeGet('colors.blues.3')({ theme })}`,
        '&:hover': {
          boxShadow: `inset 0 0 0 1px ${themeGet('colors.blues.4')({ theme })}`,
        },
        '&:active': {
          backgroundColor: themeGet('colors.blues.1')({ theme }),
          boxShadow: `inset 0 0 0 1px ${themeGet('colors.blues.4')({ theme })}`,
        },
      },
      green: {
        color: themeGet('colors.greens.5')({ theme }),
        backgroundColor: themeGet('colors.greens.0')({ theme }),
        boxShadow: `inset 0 0 0 1px ${themeGet('colors.greens.3')({ theme })}`,
        '&:hover': {
          boxShadow: `inset 0 0 0 1px ${themeGet('colors.greens.4')({
            theme,
          })}`,
        },
        '&:active': {
          backgroundColor: themeGet('colors.greens.1')({ theme }),
          boxShadow: `inset 0 0 0 1px ${themeGet('colors.greens.4')({
            theme,
          })}`,
        },
      },
      yellow: {
        color: themeGet('colors.yellows.5')({ theme }),
      },
      red: {
        color: themeGet('colors.reds.5')({ theme }),
      },
      active: {
        color: themeGet('colors.grays.5')({ theme }),
        backgroundColor: themeGet('colors.grays.1')({ theme }),
        boxShadow: `inset 0 1px 1px 0 ${themeGet('colors.blacks.4')({
          theme,
        })}, inset 0 0 0 1px ${themeGet('colors.grays.3')({ theme })}`,
        '&:hover': {
          boxShadow: `inset 0 1px 1px 0 ${themeGet('colors.blacks.4')({
            theme,
          })}, inset 0 0 0 1px ${themeGet('colors.grays.4')({ theme })}`,
        },
        '&:active': {
          backgroundColor: themeGet('colors.grays.2')({ theme }),
        },
      },
    },
    theme.buttons
  );
}

const waitingAnimation = props => keyframes`
  100% {
    transform: translateX(${
      props.size === 'medium'
        ? themeGet('space.9')(props)
        : themeGet('space.7')(props)
    })
	}
`;

const buttonSizeStyle = variant({ key: 'buttonSizes', prop: 'size' });

export const Button = styled.button`
	align-items: center;
	appearance: none;
	background-color: ${themeGet('colors.grays.0')};
	box-shadow: inset 0 0 0 1px ${themeGet('colors.grays.3')};
	border: none;
	border-radius: ${themeGet('radii.1')};
	color: ${themeGet('colors.grays.5')};
	cursor: pointer;
	display: inline-flex;
	font-family: ${themeGet('fonts.normal')};
	font-size: ${themeGet('fontSizes.2')};
	font-weight: 500;
	height: ${themeGet('space.5')};
	line-height: 1;
	min-width: ${themeGet('space.5')};
	outline: none;
	padding: 0 ${themeGet('space.2')};
	position: relative;
	text-align: center;
	text-decoration: none;
	user-select: none;

	&:hover {
    box-shadow: inset 0 0 0 1px ${themeGet('colors.grays.4')};
  }

	&:focus {
    box-shadow: inset 0 0 0 1px ${themeGet('colors.grays.4')};
  }

  &:active {
    background-color: ${themeGet('colors.grays.1')};
    box-shadow: inset 0 0 0 1px ${themeGet('colors.grays.4')};
	}

	&:disabled {
    background-color: ${themeGet('colors.grays.1')};
    box-shadow: inset 0 0 0 1px ${themeGet('colors.grays.2')};
    color: ${themeGet('colors.grays.4')};
    cursor: not-allowed;
  }

	${space}
	${buttonStyle}
	${buttonSizeStyle}

	${props =>
    props.waiting &&
    css`
			background-color: ${themeGet('colors.grays.2')};
			box-shadow: inset 0 1px 1px 0 ${themeGet(
        'colors.blacks.4'
      )}, inset 0 0 0 1px ${themeGet('colors.grays.3')};
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
          props.size === 'medium'
            ? `${themeGet('space.9')(props)} ${themeGet('space.6')(props)}`
            : `${themeGet('space.7')(props)} ${themeGet('space.5')(props)}`}
				animation: ${waitingAnimation} 500ms linear infinite;
		`}
`;
