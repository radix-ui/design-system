import * as CSS from 'csstype';
import { style, ResponsiveValue, TLengthStyledSystem } from 'styled-system';

export const whiteSpace = style({
  prop: 'whiteSpace',
});

export interface WhiteSpaceProps {
  whiteSpace?: ResponsiveValue<CSS.WhiteSpaceProperty>;
}

export const textOverflow = style({
  prop: 'textOverflow',
});

export interface TextOverflowProps {
  textOverflow?: ResponsiveValue<CSS.TextOverflowProperty>;
}

export const textIndent = style({
  prop: 'textIndent',
});

export interface TextIndentProps {
  textIndent?: ResponsiveValue<CSS.TextIndentProperty<TLengthStyledSystem>>;
}
