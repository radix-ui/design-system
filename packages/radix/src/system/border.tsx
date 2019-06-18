import * as CSS from 'csstype';
import {
  BorderWidthProps,
  BorderStyleProps,
  BorderColorProps,
  BorderTopProps,
  BorderRightProps,
  BorderBottomProps,
  BorderLeftProps,
  ResponsiveValue,
  system,
  CustomStyleDefinitions,
  TLengthStyledSystem,
} from 'styled-system';

export interface BorderProps<TLength = TLengthStyledSystem>
  extends BorderWidthProps,
    BorderStyleProps,
    BorderColorProps,
    BorderTopProps,
    BorderRightProps,
    BorderBottomProps,
    BorderLeftProps {
  /**
   * The border CSS property sets an element's border. It's a shorthand for border-width, border-style,
   * and border-color.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
   */
  border?: ResponsiveValue<CSS.BorderProperty<TLength>>;
  borderX?: ResponsiveValue<CSS.BorderProperty<TLength>>;
  borderY?: ResponsiveValue<CSS.BorderProperty<TLength>>;
}

const config: CustomStyleDefinitions = {
  border: {
    property: 'border',
    scale: 'borders',
  },
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths',
  },
  borderStyle: {
    property: 'borderStyle',
    scale: 'borderStyles',
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors',
  },
  borderTop: {
    property: 'borderTop',
    scale: 'borders',
  },
  borderRight: {
    property: 'borderRight',
    scale: 'borders',
  },
  borderBottom: {
    property: 'borderBottom',
    scale: 'borders',
  },
  borderLeft: {
    property: 'borderLeft',
    scale: 'borders',
  },
  borderX: {
    properties: ['borderLeft', 'borderRight'],
    scale: 'borders',
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
    scale: 'borders',
  },
};

export const border = system(config);
