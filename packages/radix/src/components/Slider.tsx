import React from 'react';
import {
  Slider as SliderPrimitive,
  SliderProps as SliderPrimitiveProps,
  SliderInput as Input,
} from '@modulz/primitives';
import { theme } from '../theme';

export type SliderProps = SliderPrimitiveProps;

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>((props, forwardedRef) => {
  return (
    <SliderPrimitive
      {...props}
      ref={forwardedRef}
      styleConfig={{
        base: {
          slider: {
            normal: {
              paddingTop: 6,
              paddingBottom: 6,
            },
          },
          track: {
            normal: {
              backgroundColor: theme.colors.gray400,
              color: theme.colors.blue600,
              height: 2,
              borderRadius: 1,
              [`${Input}:disabled + &`]: {
                backgroundColor: theme.colors.gray300,
                color: theme.colors.gray400,
              },
            },
          },
          innerTrack: {
            normal: {
              borderRadius: 'inherit',
            },
          },
          thumb: {
            normal: {
              height: 12,
              width: 12,
              borderRadius: 6,
              color: theme.colors.white,
              boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25), 0px 1px 3px rgba(0, 0, 0, 0.2)',
              [`${Input}:disabled&`]: {
                boxShadow: 'none',
                backgroundColor: theme.colors.gray400,
              },
            },
          },
        },
      }}
    />
  );
});

Slider.defaultProps = {
  step: '1',
};
