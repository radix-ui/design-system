import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { RadixProvider } from '../src/RadixProvider';

addDecorator((story, context) => <RadixProvider>{story()}</RadixProvider>);

configure(loadStories, module);

function loadStories() {
  const req = require.context('../src', true, /\.story\.(js|tsx)$/);
  req.keys().forEach(filename => req(filename));
}
