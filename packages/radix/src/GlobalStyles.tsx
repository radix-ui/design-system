import { createGlobalStyle } from 'styled-components';
import css from '@styled-system/css';

const fontPath = 'https://unpkg.com/@modulz/radix@latest/dist/fonts';

export const GlobalStyles = createGlobalStyle(
  css({
    '*': {
      boxSizing: 'border-box',
    },
    html: {
      fontSize: 3,
      fontFamily: 'normal',
      color: 'grays.7',
      backgroundColor: 'white',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      textRendering: 'optimizeLegibility',
    },
    body: {
      margin: 0,
    },
    'input, button, select, textarea': {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      fontWeight: 'normal',
      color: 'inherit',
    },
    svg: {
      verticalAlign: 'middle',
      display: 'block',
    },
    '@font-face': [
      {
        fontFamily: 'UntitledSans',
        fontWeight: '400',
        fontDisplay: 'swap',
        src: `local('UntitledSans'), url(${fontPath}/UntitledSansWeb-Regular.woff2) format('woff2'), url(${fontPath}/UntitledSansWeb-Regular.woff) format('woff')`,
      },
    ],
  }),
  {
    html: { lineHeight: 1.2 },
  }
);
