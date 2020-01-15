import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { RadixProvider } from '../src/RadixProvider';
import { Box } from '../src';

function ThemeComponent({ children }) {
  return (
    <RadixProvider>
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
