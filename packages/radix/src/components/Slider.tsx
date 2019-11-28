import React from 'react';
import { withTheme } from 'styled-components';
import css from '@styled-system/css';
import { variant } from '@modulz/radix-system';
import {
  Slider as SliderPrimitive,
  SliderProps as SliderPrimitiveProps,
  SliderInput as Input,
} from 'mdlz-prmtz';

type SliderProps = SliderPrimitiveProps & { theme?: any; variant?: 'normal' | 'fade' };

export const Slider = withTheme((props: SliderProps) => (
  <SliderPrimitive
    {...props}
    sliderCss={css({
      paddingTop: '6px',
      paddingBottom: '7px',
      '&:hover': {
        cursor: 'default',
      },
    })}
    thumbCss={css({
      height: '12px',
      width: '12px',
      borderRadius: '6px',
      color: 'white',
      border: 0,
      boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25), 0px 1px 3px rgba(0, 0, 0, 0.2)',
      // [`${Input}:hover&`]: { borderColor: 'gray500' },
      // [`${Input}:focus&`]: { borderColor: 'blue600' },
      [`${Input}:disabled&`]: {
        boxShadow: 'none',
        backgroundColor: 'gray400',
      },
    })}
    trackCss={[
      css({
        backgroundColor: 'gray400',
        color: 'gray400',
        height: '2px',
        borderRadius: '1px',
        top: '11px',
        transform: 'none',
        [`${Input}:disabled + &`]: { backgroundColor: 'gray300', color: 'gray400' },
      }),
      variant({
        variant: {
          normal: { color: 'blue600' },
          fade: { color: 'gray500' }, // TODO: Remove this variant
        },
      })(props),
    ]}
    innerTrackCss={css({
      borderRadius: 'inherit',
      backgroundColor: 'currentColor', // inherit `color` property of `trackCss`
    })}
  />
));

Slider.defaultProps = {
  step: '1',
  variant: 'normal',
};
