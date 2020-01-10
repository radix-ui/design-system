import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme as defaultTheme } from './theme';
import { GlobalStyles } from './GlobalStyles';

type RadixProviderProps = {
  theme?: any;
};

export const RadixProvider: FC<RadixProviderProps> = ({ theme = defaultTheme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  );
};
