import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Tooltip = styled.div`
  position: relative;
  display: inline-block;

  &::before,
  &::after {
    transition: none;
  }

  &::before {
    content: "";
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 4px 6px 0 6px;
    border-style: solid;
    border-color: ${theme.GRAY_900} transparent transparent transparent;
    z-index: 99;
    opacity: 0;
    pointer-events: none;
  }

  &::after {
    content: attr(data-tooltip);
    position: absolute;
    left: 50%;
    top: -6px;
    transform: translateX(-50%) translateY(-100%);
    background-color: ${theme.GRAY_900};
    color: #fff;
    padding: ${theme.SPACING_100};
    font-size: ${theme.FONTSIZE_200};
    border-radius: ${theme.BORDERRADIUS_100};
    z-index: 99;
    opacity: 0;
    white-space: nowrap;
    line-height: 1;
    pointer-events: none;
  }

  &[data-position="left"]::before {
    left: 0%;
    top: 50%;
    margin-left: -12px;
    transform: translateY(-50%) rotate(-90deg)
  }
  &[data-position="top"]::before {
    left: 50%;
  }

  &[data-position="bottom"]::before {
    top: 100%;
    margin-top: 8px;
    transform: translateX(-50%) translateY(-100%) rotate(-180deg);
  }
  &[data-position="right"]::before {
    left: 100%;
    top: 50%;
    margin-left: 1px;
    transform: translateY(-50%) rotate(90deg);
  }

  &[data-position="left"]::after {
    left: 0%;
    top: 50%;
    margin-left: -8px;
    transform: translateX(-100%) translateY(-50%);
  }
  &[data-position="top"]::after {
    left: 50%;
  }

  &[data-position="bottom"]::after {
    top: 100%;
    margin-top: 8px;
    transform: translateX(-50%) translateY(0%);
  }
  &&[data-position="right"]::after {
    left: 100%;
    top: 50%;
    margin-left: 8px;
    transform: translateX(0%) translateY(-50%);
  }

  &:hover::after,
  &:hover::before {
    opacity: 1;
    transition: 0ms opacity linear;
    transition-delay: 750ms;
  }
`;

export default Tooltip;
