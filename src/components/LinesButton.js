import styled, { css } from 'styled-components';
import * as theme from './../theme/';
import Margin from './../utilities/Margin';

const LinesButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  user-select: none;
  font-family: ${theme.UNTITLEDSANSMEDIUM};
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;
  border: none;
  outline: none;
  letter-spacing: .05em;
  transition-property: all;
  transition-duration: 100ms;
  transition-timing-function: ease;
  z-index: 0;
  border-radius: 0;
  font-size: ${theme.FONTSIZE_400};
  height: ${theme.SPACING_700};
  min-width: ${theme.SPACING_600};
  padding: 0 ${theme.SPACING_400};
  background-color: transparent;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: ${theme.WHITE};
    transition-property: all;
    transition-duration: 50ms;
    transition-timing-function: ease;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 6px;
    left: 6px;
    z-index: -2;
    pointer-events: none;
  }

  &:active {
    transform: translate(1px, 1px);
  }

  &:active::after {
    transform: translate(-6px, -6px);
  }

  ${p => p.size1 && css`
    font-size: ${theme.FONTSIZE_300};
    height: ${theme.SPACING_600};
    min-width: ${theme.SPACING_600};
    padding: 0 ${theme.SPACING_300};
  `}

  ${p => p.gray && css`
    color: ${theme.GRAY_600};
    &::before {
      box-shadow: inset 0 0 0 1px ${theme.GRAY_400};
    }
    &::after {
      background-image: repeating-linear-gradient(
        -45deg,
        ${theme.GRAY_500},
        ${theme.GRAY_500} 1px,
        transparent 1px,
        transparent 6px
      );
    }
    &:hover::before,
    &:active::before,
    &:focus::before {
      box-shadow: inset 0 0 0 1px ${theme.GRAY_500};
    }
  `}

  ${p => p.blue && css`
    color: ${theme.BLUE_500};
    &::before {
      box-shadow: inset 0 0 0 1px ${theme.BLUE_300};
    }
    &::after {
      background-image: repeating-linear-gradient(
        -45deg,
        ${theme.BLUE_500},
        ${theme.BLUE_500} 1px,
        transparent 1px,
        transparent 6px
      );
    }
    &:hover::before,
    &:active::before,
    &:focus::before {
      box-shadow: inset 0 0 0 1px ${theme.BLUE_500};
    }
  `}

  ${p => p.green && css`
    color: ${theme.GREEN_500};
    &::before {
      box-shadow: inset 0 0 0 1px ${theme.GREEN_300};
    }
    &::after {
      background-image: repeating-linear-gradient(
        -45deg,
        ${theme.GREEN_500},
        ${theme.GREEN_500} 1px,
        transparent 1px,
        transparent 6px
      );
    }
    &:hover::before,
    &:active::before,
    &:focus::before {
      box-shadow: inset 0 0 0 1px ${theme.GREEN_500};
    }
  `}

  ${Margin}
`;

export default LinesButton;
