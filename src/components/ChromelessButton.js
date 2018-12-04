import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';
import Margin from './../utilities/Margin';

const ChromelessButton = styled.button.attrs({
  type: 'button',
})`
  align-items: center;
  appearance: none;
  background-color: transparent;
  border: none;
  color: ${theme.GRAY_600};
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  font-family: ${theme.UNTITLEDSANSMEDIUM};
  font-size: ${theme.FONTSIZE_300};
  font-weight: 500;
  justify-content: center;
  line-height: 1;
  min-width: ${theme.SPACING_500};
  outline: none;
  padding: 0;
  position: relative;
  pointer-events: auto;
  text-align: center;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  &:focus {
    box-shadow: inset 0 0 0 1px ${theme.BLUE_500};
  }

  ${p => p.blue && css`
    color: ${theme.BLUE_600};
  `}

  ${p => p.green && css`
    color: ${theme.GREEN_600};
  `}

  ${p => p.yellow && css`
    color: ${theme.YELLOW_600};
  `}

  ${p => p.red && css`
    color: ${theme.RED_600};
  `}

  &:disabled {
    color: ${theme.GRAY_500};
    cursor: not-allowed;
  }

  ${Margin}
`;

export default ChromelessButton;
