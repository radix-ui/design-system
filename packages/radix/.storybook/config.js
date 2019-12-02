import React, { useState, Children } from 'react';
import { addDecorator, configure } from '@storybook/react';
import { RadixProvider } from '../src/RadixProvider';
import { Box, Button, theme } from '../src';

function ThemeComponent({ children }) {
  const [currentTheme, setCurrentTheme] = useState(theme);
  return (
    <RadixProvider theme={currentTheme}>
      <Box p={3}>{children}</Box>
    </RadixProvider>
  );
}

addDecorator((story, context) => <ThemeComponent>{story()}</ThemeComponent>);

configure(loadStories, module);

function loadStories() {
  const req = require.context('../src', true, /\.story\.(js|tsx)$/);
  req.keys().forEach(filename => req(filename));
}
