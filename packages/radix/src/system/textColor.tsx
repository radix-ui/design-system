import * as CSS from 'csstype';
import { system, Config, ResponsiveValue } from 'styled-system';

export interface TextColorProps {
  /**
   * The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.
   * By default the raw value of the prop is returned.
   *
   * Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.
   * Array values are converted into responsive values.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
   */
  textColor?: ResponsiveValue<CSS.ColorProperty>;
}

const config: Config = {
  textColor: {
    property: 'color',
    scale: 'colors',
  },
};

export const textColor = system(config);
