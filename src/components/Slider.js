/* Libraries */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

const Slider = ({
  value,
  min = 0,
  max = 0,
  largeStep,
  onKeyDown,
  onChange,
  ...props,
}) => {
  const percentage = ((value - min) * 100) / (max - min || 100);
  const handleChange = (event) => onChange(parseInt(event.target.value, 10));
  const handleKeyDown = (event) => {
    onKeyDown(event);

    if (event.shiftKey) {
      if (event.keyCode === 37) {
        onChange(Math.max(min, parseInt(value, 10) - largeStep));
      } else if (event.keyCode === 39) {
        onChange(Math.min(max, parseInt(value, 10) + largeStep));
      }

      event.preventDefault();
    }
  };

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
  step: '1',
  largeStep: 10,
  min: 0,
  max: 100,
  onChange: () => undefined,
  onKeyDown: () => undefined,
};

export const SliderWrapper = ({ value: initialValue }) => {
  const [value, setValue] = useState(initialValue);
  return <Slider value={value} onChange={setValue} />;
};

export default Slider;
