import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Thumb = styled.input.attrs({
  type: 'range',
})`
  appearance: none;
  background: transparent;
  cursor: pointer;
  display: block;
  padding: ${theme.SPACING_100} 0;
  vertical-align: middle;
  width: 100%;

  &::-webkit-slider-runnable-track {
    background-color: transparent;
    border-radius: 9999px;
    height: 3px;
  }

  &::-moz-range-track {
    background-color: transparent;
    border: none;
    border-radius: 9999px;
    cursor: pointer;
    height: 3px;
    width: 100%;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    background-color: white;
    border: none;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px ${theme.GRAY_500};
    cursor: pointer;
    height: ${theme.SPACING_300};
    margin-top: -6px;
    transition: transform 100ms ease;
    width: ${theme.SPACING_300};
  }

  &::-moz-range-thumb {
    appearance: none;
    background-color: white;
    border: none;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px ${theme.GRAY_500};
    cursor: pointer;
    height: ${theme.SPACING_300};
    margin-top: -6px;
    transition: transform 100ms ease;
    width: ${theme.SPACING_300};
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
  background-color: ${theme.GRAY_400};
  border-radius: 9999px;
  height: 3px;
  pointer-events: none;
  position: absolute;
  width: 100%;
  z-index: -1;
`;

const InnerTrack = styled.div`
  background: ${theme.BLUE_500};
  border-radius: 9999px;
  height: 100%;
`

const Input = styled.div`
  align-items: center;
  display: flex;
  position: relative;
`;

const Slider = (props) => {
  const { min = 0, max = 0 } = props;
  const [value, setValue] = useState(props.value || 0);
  const percentage = ((value - min) * 100) / (max - min || 100);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (props.onChange) {
      props.onChange(event);
    }
  };

  const handleKeyDown = (event) => {
    if (props.onKeyDown) {
      props.onKeyDown(event);
    }

    if (event.shiftKey) {
      if (event.keyCode === 37) {
        setValue(Math.max(props.min, parseInt(value, 10) - props.largeStep));
      } else if (event.keyCode === 39) {
        setValue(Math.min(props.max, parseInt(value, 10) + props.largeStep));
      }

      event.preventDefault();
    }
  };

  console.log(value);

  return (
    <Input>
      <Track>
        <InnerTrack style={{ width: `${percentage}%` }} />
      </Track>
      <Thumb
        {...props}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </Input>
  );
};

Slider.propTypes = {
  onKeyDown: PropTypes.func,
  onChange: PropTypes.func,
  largeStep: PropTypes.number,
  step: PropTypes.string,
  value: PropTypes.number,
}

Slider.defaultProps = {
  step: "1",
  largeStep: 10,
  min: 0,
  max: 100,
};

export default Slider;
