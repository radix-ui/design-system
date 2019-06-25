import React from 'react';
import { RadixProvider } from '@modulz/radix';
import { SidebarScrollProvider } from './scrollbarContext';

export const wrapRootElement = ({ element }) => {
  return (
    <RadixProvider>
      <SidebarScrollProvider>{element}</SidebarScrollProvider>
    </RadixProvider>
  );
};
