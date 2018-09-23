import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const PillTab = styled.a`
  align-items: center;
  display: inline-flex;
  font-family: ${theme.UNTITLEDSANSMEDIUM};
  font-size: ${theme.FONTSIZE_200};
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  box-shadow: inset 0 0 0 1px ${theme.GRAY_400};
  color: ${theme.GRAY_600};
  flex-shrink: 0;
  justify-content: center;
  outline: none;
  user-select: none;
  vertical-align: middle;
  flex-grow: 1;
  flex-basis: 0;
  position: relative;
  height: ${theme.SPACING_500};
  padding: 0 ${theme.SPACING_400};
  min-width: ${theme.SPACING_500};

  &:hover {
    box-shadow: inset 0 0 0 1px ${theme.GRAY_500};
  }

  ${p => p.left && css`
    border-radius: 9999px 0 0 9999px;

    &:hover {
      z-index: 3;
    }
  `}

  ${p => p.middle && css`
    margin-left: -1px;
    z-index: 1;

    &:hover {
      z-index: 3;
    }
  `}

  ${p => p.right && css`
    border-radius: 0 9999px 9999px 0;
    margin-left: -1px;
    z-index: 0;

    &:hover {
      z-index: 3;
    }
  `}

  ${p => p.active && css`
    background-color: ${theme.GRAY_200};
    box-shadow: inset 0 0 0 1px ${theme.GRAY_500}, inset 0 2px 0 hsla(208,24%,10%,.05);
    color: ${theme.GRAY_600};
    cursor: default;
    z-index: 3;
  `}
`;

export default PillTab;
