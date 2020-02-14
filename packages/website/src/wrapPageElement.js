import React from 'react';
import App from './App';
import { RadixProvider } from '@modulz/radix';

export const wrapPageElement = props => (
  <RadixProvider>
    <App {...props} />
  </RadixProvider>
);
