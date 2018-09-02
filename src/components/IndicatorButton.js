import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const IndicatorButton = styled.button.attrs({
  type: 'button',
})`
  appearance: none;
  background-color: transparent;
  box-shadow: inset 0 0 0 1px ${theme.GRAY_400};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  flex-shrink: 0;
  height: ${theme.SPACING_200};
  width: ${theme.SPACING_200};
  outline: none;
  padding: 0;
  vertical-align: middle;

  &:hover {
    box-shadow: inset 0 0 0 1px ${theme.GRAY_500};
  }

  ${p => p.active && css`
    box-shadow: none;
    background-color: ${theme.GRAY_900};
  `}

  &:disabled {
    box-shadow: inset 0 0 0 1px ${theme.GRAY_300};
    cursor: not-allowed;
  }
`;

export default IndicatorButton;
