import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const ListItem = styled.button.attrs({
  type: 'button',
})`
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  color: inherit;
  cursor: pointer;
  line-height: 1;
  min-height: ${theme.SPACING_600};
  outline: none;
  padding-bottom: ${theme.SPACING_100};
  padding-left: ${theme.SPACING_300};
  padding-right: ${theme.SPACING_300};
  padding-top: ${theme.SPACING_100};
  text-align: left;
  text-decoration: none;
  user-select: none;
  width: 100%;

  &:hover,
  &:focus {
    background-color: ${theme.GRAY_200};
  }

  &:active {
    background-color: ${theme.GRAY_300};
  }

  ${props => props.active && css`
    background-color: ${theme.BLUE_200};
    color: ${theme.BLUE_600};
    cursor: default;
    font-family: ${theme.UNTITLEDSANSMEDIUM};
    font-weight: 500;
    pointer-events: none;
  `}

  ${props => props.highlighted && css`
    background-color: ${theme.BLUE_100};
    &:hover {
      background-color: ${theme.BLUE_200};
    }
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
`;

export default ListItem;
