import styled from 'styled-components';
import * as theme from './../theme/';

const Slider = styled.input.attrs({
  type: 'range',
})`
  appearance: none;
  display: block;
  padding: ${theme.SPACING_100} 0;
  width: 100%;
  cursor: pointer;
  vertical-align: middle;
  background: transparent;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background-color: ${theme.GRAY_400};
    border-radius: 9999px;
    border: none;
  }

  &::-webkit-slider-thumb {
    box-shadow: inset 0 0 0 1px ${theme.GRAY_500};
    border: none;
    height: ${theme.SPACING_300};
    width: ${theme.SPACING_300};
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
    appearance: none;
    margin-top: -6px;
    transition: transform 100ms ease;
  }

  &:hover {
    &::-webkit-slider-thumb {
      box-shadow: inset 0 0 0 1px ${theme.GRAY_600};
    }
  }

  &:focus {
    outline: none;

    &::-webkit-slider-thumb {
      box-shadow: inset 0 0 0 1px ${theme.BLUE_500};
    }
  }
`;

export default Slider;
