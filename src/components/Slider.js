import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Thumb = styled.input.attrs({
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
    background-color: transparent;
    border-radius: 9999px;
    border: none;
  }

  &::-moz-range-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background-color: transparent;
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

  &::-moz-range-thumb {
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

    &::-moz-range-thumb {
      box-shadow: inset 0 0 0 1px ${theme.BLUE_500};
    }
  }
`;

const Track = styled.div`
  height: 3px;
  background-color: ${theme.GRAY_400};
  width: 100%;
  border-radius: 9999px;
  pointer-events: none;
  position: absolute;
`;

const SelectedTrack = styled.div`
  height: 3px;
  background: ${theme.BLUE_500};
  border-radius: 9999px;

  ${({ percentageWidth }) => css`
    width: ${percentageWidth}%;
  `}
`

const Input = styled.div`
  display: flex;
  align-items: center;
`;

const Slider = (props) => {
  const { min = 0, max = 0 } = props;
  const [value, setValue] = useState(props.value || 0);
  const onChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (props.onChange) {
      props.onChange(value);
    }
  };
  const percentage = ((value - min) * 100) / (max - min || 1);
  return (
    <Input>
      <Track>
        <SelectedTrack percentageWidth={percentage} />
      </Track>
      <Thumb {...props} value={value} onChange={onChange} />
    </Input>
  );
};

export default Slider;
