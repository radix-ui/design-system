import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme as defaultTheme } from './theme';
import { Theme } from 'styled-system';
import { makeDividers } from './components/Divider';
import { makeButtons, makeButtonSizes } from './components/Button';
import { GlobalStyles } from './GlobalStyles';
import { makeCards } from './components/Card';
import { makeContainerSizes } from './components/Container';
import {
  makeGhostButtons,
  makeGhostButtonSizes,
} from './components/GhostButton';
import { makeInputSizes, makeInputs } from './components/Input';
import { makeMenus } from './components/Menu';

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
    ...makeCards(theme),
    ...makeContainerSizes(theme),
    ...makeGhostButtons(theme),
    ...makeGhostButtonSizes(theme),
    ...makeInputs(theme),
    ...makeInputSizes(theme),
    ...makeMenus(theme),
  };
}
