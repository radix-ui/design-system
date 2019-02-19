import styled, { css } from 'styled-components';
import * as theme from './../theme/';
import Card from './Card';

const CardLink = styled(Card)`
  appearance: none;
  border: none;
  display: block;
  text-decoration: none;
  color: inherit;
  outline: none;
  text-align: left;
  user-select: none;
  line-height: 1;
  transition: opacity 80ms linear, transform 150ms ease;

  &::before,
  &::after {
    transition-property: all;
    transition-duration: 80ms;
    transition-timing-function: linear;
  }

  ${props => props.border && css`
    &:hover {
      &::after {
        box-shadow: inset 0 0 0 1px ${theme.GRAY_500};
      }
    }
    &:focus {
      &::after {
        box-shadow: inset 0 0 0 1px ${theme.BLUE_500};
      }
    }
    ${props => props.selected && css`
      &::after {
        box-shadow: inset 0 0 0 2px ${theme.BLUE_500};
      }
      &:hover,
      &:focus {
        &::after {
          box-shadow: inset 0 0 0 2px ${theme.BLUE_500};
        }
      }
    `}
  `}

  ${props => props.perspective && css`
    &:hover,
    &:focus {
      transform: translateY(-2px);
    }
    &:focus {
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 0 1px ${theme.BLUE_500} inset;
        border-radius: ${theme.BORDERRADIUS_200};
      }
    }
    &:active {
      background-color: ${theme.GRAY_100};
      transform: translateY(0);
    }
  `}

  ${props => props.ghost && css`
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      box-shadow:
        0 10px 38px -10px hsla(208,24%,7%,.35),
        0 10px 20px -15px hsla(208,24%,7%,.2);
      border-radius: ${theme.BORDERRADIUS_200};
    }
    &:hover,
    &:focus {
      transform: translateY(-2px);
      &::before {
        opacity: 1;
      }
    }
    &:focus {
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: inset 0 0 0 1px ${theme.BLUE_500};
        border-radius: ${theme.BORDERRADIUS_200};
      }
    }
    &:active {
      transform: translateY(0);
      background-color: ${theme.GRAY_100};
    }
  `}
`;

export default CardLink;
