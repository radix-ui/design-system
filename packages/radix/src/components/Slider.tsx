import React, { useState, useEffect, ChangeEvent, ChangeEventHandler } from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { variant } from '../system';

type SliderProps = {
  name?: string;
  min?: number;
  max?: number;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  variant?: 'normal' | 'fade';
};

export const Slider = ({
  name,
  min = 0,
  max = 100,
  value,
  onChange,
  variant,
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
        name={name}
        value={String(stateValue)}
        min={min}
        max={max}
        onChange={
          isControlled
            ? onChange
            : (event: ChangeEvent<HTMLInputElement>) => setStateValue(Number(event.target.value))
        }
        variant={variant}
      />
      <Track>
        <InnerTrack style={{ width: `${percentage}%` }} variant={variant} />
      </Track>
    </Wrapper>
  );
};

Slider.defaultProps = {
  step: '1',
  variant: 'normal',
};

const TRACK_HEIGHT = 1;

const Wrapper = styled('div')({
  width: '100%',
  position: 'relative',
  display: 'flex',
});

const trackStyle = {
  backgroundColor: 'transparent',
  height: `${TRACK_HEIGHT}px`,
};

const trackDisabledStyling = {
  borderColor: 'grays.2',
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
  color: 'white',
  boxShadow: '0 0 0 3px currentColor',
};

const thumbFocusStyle = {
  borderColor: 'blues.4',
};

const thumbHoverStyle = {
  borderColor: 'grays.4',
};

const thumbDisabledStyle = {
  borderColor: 'grays.2',
};

const Input = styled('input')<SliderProps>(
  css({
    appearance: 'none',
    background: 'transparent',
    cursor: 'pointer',
    display: 'block',
    paddingY: '7px',
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
        ...thumbHoverStyle,
      },
      '&::-moz-range-thumb': {
        ...thumbHoverStyle,
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
    '&:disabled': {
      cursor: 'not-allowed',
      '&::-webkit-slider-runnable-track': {
        ...trackDisabledStyling,
      },
      '&::-moz-range-track': {
        ...trackDisabledStyling,
      },
      '&::-webkit-slider-thumb': {
        ...thumbDisabledStyle,
      },
      '&::-moz-range-thumb': {
        ...thumbDisabledStyle,
      },
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
    [`${Input}:disabled + &`]: {
      backgroundColor: 'grays.2',
    },
  })
);

const InnerTrack = styled('div')<SliderProps>(
  css({
    ...trackStyle,
    height: '100%',
  }),
  variant({
    variant: {
      normal: {
        backgroundColor: 'blues.4',
      },
      fade: {
        backgroundColor: 'grays.4',
      },
    },
  })
);
