import * as CSS from 'csstype';
import { system, CustomStyleDefinitions, ResponsiveValue } from 'styled-system';

export interface PositionProps {
  /**
   * The position CSS property specifies how an element is positioned in a document.
   * The top, right, bottom, and left properties determine the final location of positioned elements.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
   */
  position?: ResponsiveValue<CSS.PositionProperty>;
}

export const config: CustomStyleDefinitions = {
  position: true,
};

export const position = system(config);
