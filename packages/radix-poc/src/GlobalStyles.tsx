import { createGlobalStyle } from 'styled-components';
import { themeGet } from 'styled-system';
import {
  UntitledSansWoff,
  UntitledSansWoff2,
  UntitledSansMediumWoff,
  UntitledSansMediumWoff2,
} from './fonts';

export const GlobalStyles = createGlobalStyle`
  * { box-sizing: border-box; }

  @font-face {
    font-family: 'UntitledSans';
    src: local('UntitledSans'), url(${UntitledSansWoff}) format('woff2'),
         local('UntitledSans'), url(${UntitledSansWoff2}) format('woff');
  }

  @font-face {
    font-family: 'UntitledSans-Medium';
    src: local('UntitledSans-Medium'), url(${UntitledSansMediumWoff}) format('woff2'),
         local('UntitledSans-Medium'), url(${UntitledSansMediumWoff2}) format('woff');
  }

  html {
    font-size: 100%;
    line-height: 1.1;
    font-family: ${themeGet('fonts.normal')};
    color: ${themeGet('colors.grays.7')};
    background-color: ${themeGet('colors.white')};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    margin: 0;
  }

  input,
  button,
  select,
  textarea {
    font-family: inherit;
    font-size: inherit;
    font-weight: normal;
    color: inherit;
  }

  svg {
    vertical-align: middle;
  }
`;
