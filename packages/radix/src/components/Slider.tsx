import React, { useState, useEffect, ChangeEventHandler } from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';

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

const Wrapper = styled('div')({
  width: '100%',
  position: 'relative',
  display: 'inline-flex',
});

const trackStyle = {
  backgroundColor: 'transparent',
  borderRadius: `${TRACK_HEIGHT}px`,
  height: `${TRACK_HEIGHT}px`,
};

const thumbStyle = {
  appearance: 'none',
  backgroundColor: 'white',
  borderRadius: '50%',
  border: '1px solid',
  borderColor: 'grays.3',
  height: 3,
  marginTop: '-6px',
  transition: 'transform 100ms ease',
  width: 3,
};

const thumbFocusStyle = {
  borderColor: 'blues.4',
};

const Input = styled('input')(
  css({
    appearance: 'none',
    background: 'transparent',
    cursor: 'pointer',
    display: 'block',
    paddingY: 1,
    paddingX: 0,
    margin: 0,
    width: '100%',
    position: 'relative',
    zIndex: 1,
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    '&::-webkit-slider-runnable-track': {
      ...trackStyle,
    },
    '&::-moz-range-track': {
      ...trackStyle,
    },
    '&::-webkit-slider-thumb': {
      ...thumbStyle,
    },
    '&::-moz-range-thumb': {
      ...thumbStyle,
    },
    '&:hover': {
      '&::-webkit-slider-thumb': {
        borderColor: 'grays.4',
      },
    },
    '&:focus': {
      outline: 'none',
      '&::-webkit-slider-thumb': {
        ...thumbFocusStyle,
      },
      '&::-moz-range-thumb': {
        ...thumbFocusStyle,
      },
    },
    // remove focus border in Firefox:
    // https://css-tricks.com/sliding-nightmare-understanding-range-input */
    '::-moz-focus-outer': {
      border: 0,
    },
  })
);

const Track = styled('div')(
  css({
    ...trackStyle,
    backgroundColor: 'grays.3',
    position: 'absolute',
    left: 0,
    top: '50%',
    right: 0,
    zIndex: 0,
    transform: 'translateY(-50%)',
  })
);

const InnerTrack = styled('div')(
  css({
    ...trackStyle,
    height: '100%',
    backgroundColor: 'blues.3',
  })
);
