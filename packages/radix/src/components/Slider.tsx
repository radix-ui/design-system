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
    sliderCss={css({ paddingY: '7px' })}
    thumbCss={css({
      color: 'white',
      borderColor: 'gray400',
      boxShadow: `0 0 0 3px currentColor`,
      [`${Input}:hover&`]: { borderColor: 'gray500' },
      [`${Input}:focus&`]: { borderColor: 'blue500' },
      [`${Input}:disabled&`]: { borderColor: 'gray300' },
    })}
    trackCss={css({
      backgroundColor: 'gray400',
      [`${Input}:disabled + &`]: { backgroundColor: 'gray300' },
    })}
    innerTrackCss={variant({
      variant: {
        normal: { backgroundColor: 'blue500' },
        fade: { backgroundColor: 'gray500' },
      },
    })(props)}
  />
));

Slider.defaultProps = {
  step: '1',
  variant: 'normal',
};
