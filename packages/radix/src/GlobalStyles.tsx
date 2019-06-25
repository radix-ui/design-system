import { createGlobalStyle } from 'styled-components';
import css from '@styled-system/css';
import {
  UntitledSansWoff,
  UntitledSansWoff2,
  UntitledSansMediumWoff,
  UntitledSansMediumWoff2,
} from './fonts';

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
        fontWeight: 400,
        fontDisplay: 'swap',
        src: `local('UntitledSans'), url(${UntitledSansWoff2}) format('woff2'), url(${UntitledSansWoff}) format('woff')`,
      },
      {
        fontFamily: 'UntitledSans',
        fontWeight: 500,
        fontDisplay: 'swap',
        src: `local('UntitledSans-Medium'),
        url(${UntitledSansMediumWoff2}) format('woff2'),
        url(${UntitledSansMediumWoff}) format('woff')`,
      },
      {
        fontFamily: 'UntitledSans-Medium',
        fontWeight: 500,
        fontDisplay: 'swap',
        src: `local('UntitledSans-Medium'),
        url(${UntitledSansMediumWoff2}) format('woff2'),
        url(${UntitledSansMediumWoff}) format('woff')`,
      },
    ],
  }),
  {
    html: { lineHeight: 1.2 },
  }
);
