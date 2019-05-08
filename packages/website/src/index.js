import React from 'react';
import { RadixProvider } from 'radix-poc';

export const wrapRootElement = ({ element }) => (
  <RadixProvider>{element}</RadixProvider>
);
