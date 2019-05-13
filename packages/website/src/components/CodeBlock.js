import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { useMDXComponents, mdx } from '@mdx-js/react';
import { Box } from 'radix-poc';

export default ({ children, className, live, render, ghost }) => {
  const components = useMDXComponents();

  const liveProviderProps = {
    transformCode: code => '/* @jsx mdx */' + code,
    scope: { mdx, ...components },
  };

  if (live) {
    return (
      <Box mt={5}>
        <LiveProvider code={children.trim()} {...liveProviderProps}>
          <LivePreview
            style={{
              padding: !ghost && 10,
              border: !ghost && '1px solid #eee',
              borderRadius: !ghost && '3px 3px 0 0',
            }}
          />
          <LiveEditor
            style={{
              // backgroundColor: '#eee',
              backgroundColor: '#2a2734',
              borderRadius: !ghost && '0 0 3px 3px ',
            }}
          />
          <LiveError />
        </LiveProvider>
      </Box>
    );
  }

  return (
    <Box mt={5}>
      <LiveProvider code={children} {...liveProviderProps}>
        <LiveEditor disabled />
      </LiveProvider>
    </Box>
  );
};
