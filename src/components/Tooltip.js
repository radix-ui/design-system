import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Tooltip = styled.div`
  position: relative;
  display: inline-block;

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
  }
  &::after {
    content: attr(data-tooltip);
    position: absolute;
    left: 50%;
    top: -6px;
    transform: translateX(-50%)   translateY(-100%);
    background-color: ${theme.GRAY_900};
    text-align: center;
    color: #fff;
    padding: ${theme.SPACING_200} ${theme.SPACING_200};
    font-size: ${theme.FONTSIZE_200};
    min-width: 80px;
    border-radius: ${theme.BORDERRADIUS_100};
    pointer-events: none;
    z-index: 99;
    opacity: 0;
    white-space: nowrap;
    line-height: 1;
  }

  [data-tooltip-position="left"]::before{
    left:0%;
    top:50%;
    margin-left:-12px;
    transform:translatey(-50%) rotate(-90deg)
  }
  [data-tooltip-position="top"]::before{
    left:50%;
  }
  [data-tooltip-position="bottom"]::before{
    top:100%;
    margin-top:8px;
    transform: translateX(-50%) translatey(-100%) rotate(-180deg)
  }
  [data-tooltip-position="right"]::before{
    left:100%;
    top:50%;
    margin-left:1px;
    transform:translatey(-50%) rotate(90deg)
  }
  [data-tooltip-position="left"]::after{
    left:0%;
    top:50%;
    margin-left:-8px;
    transform: translateX(-100%)   translateY(-50%);
  }
  [data-tooltip-position="top"]::after{
    left:50%;
  }
  [data-tooltip-position="bottom"]::after{
    top:100%;
    margin-top:8px;
    transform: translateX(-50%) translateY(0%);
  }
  [data-tooltip-position="right"]::after{
    left:100%;
    top:50%;
    margin-left:8px;
    transform: translateX(0%)   translateY(-50%);
  }

  &:hover::after,
  &:hover::before {
    opacity:1;
  }
`;

export default Tooltip;
