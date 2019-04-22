import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { themeGet } from 'styled-system';
import merge from 'lodash.merge';
import { theme as defaultTheme } from './theme';
import { makeDividers } from './components/Divider';
import { makeButtons } from './components/Button';

import UntitledSansWoff from './fonts/UntitledSansWeb-Regular.woff';
import UntitledSansWoff2 from './fonts/UntitledSansWeb-Regular.woff2';
import UntitledSansMediumWoff from './fonts/UntitledSansWeb-Medium.woff';
import UntitledSansMediumWoff2 from './fonts/UntitledSansWeb-Medium.woff2';

const GlobalStyles = createGlobalStyle`
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

export function RadixProvider({ theme = defaultTheme, children }) {
  return (
    <ThemeProvider theme={makeTheme(theme)}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  );
}

function makeTheme(theme) {
  return {
    ...theme,
    ...makeButtons(theme),
    buttonSizes: makeButtonSizes(theme),
    ...makeDividers(theme),
  };
}

function makeButtonSizes(theme) {
  return merge(
    {
      medium: {
        fontSize: themeGet('fontSizes.3')({ theme }),
        padding: `0 ${themeGet('space.3')({ theme })}`,
        height: themeGet('space.6')({ theme }),
        minWidth: themeGet('space.6')({ theme }),
      },
    },
    theme.buttonSizes
  );
}
