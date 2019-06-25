import React, { useState, Children } from 'react';
import { addDecorator, configure } from '@storybook/react';
import { RadixProvider } from '../src/RadixProvider';
import { Box, Button, theme } from '../src';

const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    white: theme.colors.black,
    whites: [...theme.colors.blacks].reverse(),
    grays: [...theme.colors.grays].reverse(),
    black: theme.colors.white,
    blacks: [...theme.colors.whites].reverse(),
    blues: [...theme.colors.blues].reverse(),
    greens: [...theme.colors.greens].reverse(),
  },
};

function ThemeComponent({ children }) {
  const [currentTheme, setCurrentTheme] = useState(theme);
  return (
    <RadixProvider theme={currentTheme}>
      <Box p={3}>
        <Box py={3} mb={6} borderBottom="1px solid" borderColor="grays.3">
          <Button onClick={() => setCurrentTheme(currentTheme === theme ? darkTheme : theme)}>
            Change theme
          </Button>
        </Box>
        {children}
      </Box>
    </RadixProvider>
  );
}

addDecorator((story, context) => <ThemeComponent>{story()}</ThemeComponent>);

configure(loadStories, module);

function loadStories() {
  const req = require.context('../src', true, /\.story\.(js|tsx)$/);
  req.keys().forEach(filename => req(filename));
}
