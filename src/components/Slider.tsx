import React, { useState, useEffect, ChangeEventHandler } from 'react';
import styled, { css } from 'styled-components';
import { themeGet } from 'styled-system';

type SliderProps = {
  min?: number;
  max?: number;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const Slider = ({
  min = 0,
  max = 100,
  value,
  onChange,
  ...props
}: SliderProps) => {
  const isControlled = value !== undefined && onChange !== undefined;
  const [stateValue, setStateValue] = useState<number>(Number(value) || 0);

  const percentage = ((stateValue - min) * 100) / (max - min || 100);

  // keep local state in sync with `value` prop
  useEffect(() => {
    if (isControlled) {
      setStateValue(Number(value));
    }
  }, [value, isControlled]);

  return (
    <Wrapper>
      <Input
        {...props}
        type="range"
        value={stateValue}
        min={min}
        max={max}
        onChange={
          isControlled
            ? onChange
            : event => setStateValue(Number(event.target.value))
        }
      />
      <Track>
        <InnerTrack style={{ width: `${percentage}%` }} />
      </Track>
    </Wrapper>
  );
};

Slider.defaultProps = {
  step: '1',
};

const TRACK_HEIGHT = 3;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: inline-flex;
`;

const trackStyle = css`
  background-color: transparent;
  border-radius: ${TRACK_HEIGHT}px;
  height: ${TRACK_HEIGHT}px;
`;

const thumbStyle = css`
  appearance: none;
  background-color: white;
  border: none;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px ${themeGet('colors.grays.4')};
  height: ${themeGet('space.3')};
  margin-top: -6px;
  transition: transform 100ms ease;
  width: ${themeGet('space.3')};
`;

const thumbFocusStyle = css`
  box-shadow: inset 0 0 0 1px ${themeGet('colors.blues.4')};
`;

const Input = styled.input`
  appearance: none;
  background: transparent;
  cursor: pointer;
  display: block;
  padding: ${themeGet('space.1')} 0;
  margin: 0;
  width: 100%;

  &::-webkit-slider-runnable-track {
    ${trackStyle}
  }

  &::-moz-range-track {
    ${trackStyle}
  }

  &::-webkit-slider-thumb {
    ${thumbStyle}
  }

  &::-moz-range-thumb {
    ${thumbStyle}
  }

  &:hover {
    &::-webkit-slider-thumb {
      box-shadow: inset 0 0 0 1px ${themeGet('colors.grays.5')};
    }
  }

  &:focus {
    outline: none;

    &::-webkit-slider-thumb {
      ${thumbFocusStyle}
    }

    &::-moz-range-thumb {
      ${thumbFocusStyle}
    }
  }

  /* remove focus border in Firefox:
  https://css-tricks.com/sliding-nightmare-understanding-range-input */
  ::-moz-focus-outer {
    border: 0;
  }
`;

const Track = styled.div`
  ${trackStyle}
  background-color: ${themeGet('colors.grays.3')};
  position: absolute;
  left: 0;
  top: 50%;
  right: 0;
  z-index: -1;
  transform: translateY(-50%);
`;

const InnerTrack = styled.div`
  ${trackStyle}
  height: 100%;
  background-color: ${themeGet('colors.blues.3')};
`;
