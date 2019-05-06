import React from 'react';
import { RadixProvider } from 'radix-poc';

function Layout({ children }) {
  return <RadixProvider>{children}</RadixProvider>;
}

export default Layout;
