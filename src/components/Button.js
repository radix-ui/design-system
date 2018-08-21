import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Button = styled.button.attrs({
  type: 'button',
})`
  align-items: center;
  appearance: none;
  background-color: ${theme.GRAY_100};
  box-shadow: inset 0 0 0 1px ${theme.GRAY_400};
  border: none;
  border-radius: ${theme.BORDERRADIUS_100};
  color: ${theme.GRAY_600};
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  font-family: ${theme.UNTITLEDSANSMEDIUM};
  font-size: ${theme.FONTSIZE_200};
  font-weight: 500;
  height: ${theme.SPACING_500};
  justify-content: center;
  line-height: 1;
  min-width: ${theme.SPACING_500};
  outline: none;
  padding: 0 ${theme.SPACING_200};
  position: relative;
  pointer-events: auto;
  text-align: center;
  text-decoration: none;
  user-select: none;
  white-space: nowrap;

  &:hover {
    box-shadow: inset 0 0 0 1px ${theme.GRAY_500};
  }

  &:active {
    background-color: ${theme.GRAY_200};
    box-shadow: inset 0 0 0 1px ${theme.GRAY_500};
  }

  ${p => p.size2 && css`
    font-size: ${theme.FONTSIZE_300};
    height: ${theme.SPACING_600};
    min-width: ${theme.SPACING_600};
    padding: 0 ${theme.SPACING_300};
  `}

  ${p => p.blue && css`
    background-color: ${theme.BLUE_100};
    box-shadow: inset 0 0 0 1px ${theme.BLUE_400};
    color: ${theme.BLUE_600};

    &:hover {
      box-shadow: inset 0 0 0 1px ${theme.BLUE_500};
    }

    &:active {
      background-color: ${theme.BLUE_200};
      box-shadow: inset 0 0 0 1px ${theme.BLUE_500};
    }
  `}

  ${p => p.green && css`
    background-color: ${theme.GREEN_100};
    box-shadow: inset 0 0 0 1px ${theme.GREEN_400};
    color: ${theme.GREEN_600};

    &:hover {
      box-shadow: inset 0 0 0 1px ${theme.GREEN_500};
    }

    &:active {
      background-color: ${theme.GREEN_200};
      box-shadow: inset 0 0 0 1px ${theme.GREEN_500};
    }
  `}

  ${p => p.yellow && css`
    color: ${theme.YELLOW_600};
  `}

  ${p => p.red && css`
    color: ${theme.RED_600};
  `}

  ${p => p.active && css`
    background-color: ${theme.GRAY_200};
    box-shadow: inset 0 1px 1px 0 rgba(0,0,0,.1), inset 0 0 0 1px ${theme.GRAY_400};
    color: ${theme.GRAY_600};

    &:hover,
    &:active {
      box-shadow: inset 0 1px 1px 0 rgba(0,0,0,.1), inset 0 0 0 1px ${theme.GRAY_500};
    }

    &:active {
      background-color: ${theme.GRAY_300};
    }
  `}

  &:disabled {
    background-color: ${theme.GRAY_200};
    box-shadow: inset 0 0 0 1px ${theme.GRAY_300};
    color: ${theme.GRAY_500};
    cursor: not-allowed;
  }

  @keyframes stripes {
    100% {
      transform: translateX(${theme.SPACING_800});
    }
  }

  ${p => p.waiting && css`
    background-color: ${theme.GRAY_200};
    overflow: hidden;
    color: transparent;
    pointer-events: none;
    &::before {
      position: absolute;
      content: '';
      top: 0;
      left: -100%;
      width: 200%;
      height: 100%;
      background-image: linear-gradient(
        -45deg,
        transparent 33%,
        rgba(0,0,0,.05) 33%,
        rgba(0,0,0,.05) 66%,
        transparent 66%
      );
      background-size: ${theme.SPACING_800} ${theme.SPACING_600};
      animation: stripes 500ms linear infinite;
    }
  `}

  ${p => p.left && css`
    border-radius: ${theme.BORDERRADIUS_100} 0 0 ${theme.BORDERRADIUS_100};
    z-index: 2;

    &:hover {
      z-index: 3;
    }
  `}

  ${p => p.middle && css`
    border-radius: 0;
    margin-left: -1px;
    z-index: 1;

    &:hover {
      z-index: 3;
    }
  `}

  ${p => p.right && css`
    border-radius: 0 ${theme.BORDERRADIUS_100} ${theme.BORDERRADIUS_100} 0;
    margin-left: -1px;
    z-index: 0;

    &:hover {
      z-index: 3;
    }
  `}
`;

Button.propTypes = {
  mode: PropTypes.oneOf([
    'size1',
    'size2'
  ])
}

Button.defaultProps = {
  size: 'size2'
};

export default Button;
