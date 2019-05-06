import React from 'react';
import { RadixProvider } from 'radix-poc';
import { MDXProvider } from '@mdx-js/react';
import CodeBlock from './CodeBlock';
// import { Button } from 'radix-poc';

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock,
  // h1: props => <h1 style={{ color: 'tomato' }} {...props} />,
  // button: Button,
  button: props => <div {...props} />,
};

function Layout({ children }) {
  return (
    <RadixProvider>
      <MDXProvider components={components}>{children}</MDXProvider>
    </RadixProvider>
  );
}

export default Layout;
