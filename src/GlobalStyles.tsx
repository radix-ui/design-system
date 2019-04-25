import { createGlobalStyle } from 'styled-components';
import { themeGet } from 'styled-system';

export const GlobalStyles = createGlobalStyle`
  * { box-sizing: border-box; }

  html {
    font-size: 100%;
    line-height: 1;
    font-family: ${themeGet('fonts.normal')};
    color: ${themeGet('colors.grays.7')};
  }

  input,
  button,
  select,
  textarea {
    font-size: inherit;
    font-weight: normal;
    color: inherit;
  }
`;
