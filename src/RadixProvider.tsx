import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme as defaultTheme } from './theme';
import { Theme } from 'styled-system';
import { makeDividers } from './components/Divider';
import { makeButtons, makeButtonSizes } from './components/Button';
import { GlobalStyles } from './GlobalStyles';

type RadixProviderProps = {
  theme?: Theme;
};

export const RadixProvider: FC<RadixProviderProps> = ({
  theme = defaultTheme,
  children,
}) => {
  return (
    <ThemeProvider theme={makeTheme(theme)}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  );
};

function makeTheme(theme: Theme) {
  return {
    ...theme,
    ...makeButtons(theme),
    ...makeButtonSizes(theme),
    ...makeDividers(theme),
  };
}
