import styled, { css } from 'styled-components';
import * as theme from './../theme/';

import Padding from './../utilities/Padding';

const MenuItem = styled.a`
  align-items: center;
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  color: inherit;
  cursor: pointer;
  display: flex;
  line-height: 1;
  min-height: ${theme.SPACING_600};
  outline: none;
  padding-bottom: ${theme.SPACING_100};
  padding-left: ${theme.SPACING_400};
  padding-right: ${theme.SPACING_400};
  padding-top: ${theme.SPACING_100};
  text-align: left;
  text-decoration: none;
  user-select: none;
  width: 100%;

  &:hover {
    background-color: ${theme.GRAY_200};
  }

  &:active {
    background-color: ${theme.GRAY_300};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${theme.BLUE_300};
  }

  ${props => props.active && css`
    background-color: ${theme.BLUE_500};
    color: white;
    cursor: default;
    font-family: ${theme.UNTITLEDSANSMEDIUM};
    font-weight: 500;
    pointer-events: none;

    &:focus {
      box-shadow: none;
    }
  `}

  ${props => props.selected && css`
    background-color: ${theme.BLUE_100};
    box-shadow: 0 0 0 1px ${theme.BLUE_300};
  `}

  ${props => props.highlighted && css`
    background-color: ${theme.BLUE_200};
    &:hover,
    &:active {
      background-color: ${theme.BLUE_200};
    }
  `}

  ${props => props.size1 && css`
    min-height: ${theme.SPACING_600};
  `}

  ${props => props.size2 && css`
    min-height: ${theme.SPACING_700};
  `}

  ${Padding}
`;

export default MenuItem;
