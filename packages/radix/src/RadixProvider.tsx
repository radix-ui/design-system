import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme as defaultTheme } from './theme';
import { GlobalStyles } from './GlobalStyles';
import { FontStyles } from './fonts';

type RadixProviderProps = {
  // TODO: type Theme
  theme?: any;
};

export const RadixProvider: FC<RadixProviderProps> = ({ theme = defaultTheme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <FontStyles />
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  );
};
