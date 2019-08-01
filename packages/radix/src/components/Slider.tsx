import React from 'react';
import { withTheme } from 'styled-components';
import css from '@styled-system/css';
import { variant } from '@modulz/radix-system';
import {
  Slider as SliderPrimitive,
  SliderProps as SliderPrimitiveProps,
  Input,
} from '@modulz/primitives';

type SliderProps = SliderPrimitiveProps & { theme?: any; variant?: 'normal' | 'fade' };

export const Slider = withTheme((props: SliderProps) => (
  <SliderPrimitive
    {...props}
    sliderCss={css({ paddingY: '7px' })}
    thumbCss={css({
      color: 'white',
      borderColor: 'grays.3',
      boxShadow: `0 0 0 3px currentColor`,
      [`${Input}:hover&`]: { borderColor: 'grays.4' },
      [`${Input}:focus&`]: { borderColor: 'blues.4' },
      [`${Input}:disabled&`]: { borderColor: 'grays.2' },
    })}
    trackCss={css({
      backgroundColor: 'grays.3',
      [`${Input}:disabled + &`]: { backgroundColor: 'grays.2' },
    })}
    innerTrackCss={variant({
      variant: {
        normal: { backgroundColor: 'blues.4' },
        fade: { backgroundColor: 'grays.4' },
      },
    })(props)}
  />
));

Slider.defaultProps = {
  step: '1',
  variant: 'normal',
};
