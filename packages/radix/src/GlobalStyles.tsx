import { createGlobalStyle } from 'styled-components';
import css from '@styled-system/css';

export const GlobalStyles = createGlobalStyle(
  css({
    '*': {
      boxSizing: 'border-box',
    },
    html: {
      color: 'gray800',
      fontFamily: 'normal',
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
    },
    body: {
      margin: 0,
    },
  })
);
