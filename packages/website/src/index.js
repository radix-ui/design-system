import React from 'react';
import { RadixProvider } from '@modulz/radix';

export const wrapRootElement = ({ element }) => (
  <RadixProvider>{element}</RadixProvider>
);
