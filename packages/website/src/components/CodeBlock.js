import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { useMDXComponents, mdx } from '@mdx-js/react';
import { Box } from 'radix-poc';

console.log(defaultProps);

export default ({ children, className, live, render, ghost }) => {
  // const language = className.replace(/language-/, '');
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
              backgroundColor: '#eee',
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

  // return (
  //   <Highlight {...defaultProps} code={children} language={language}>
  //     {({ className, style, tokens, getLineProps, getTokenProps }) => (
  //       <pre className={className} style={{ ...style, padding: '20px' }}>
  //         {tokens.map((line, i) => (
  //           <div key={i} {...getLineProps({ line, key: i })}>
  //             {line.map((token, key) => (
  //               <span key={key} {...getTokenProps({ token, key })} />
  //             ))}
  //           </div>
  //         ))}
  //       </pre>
  //     )}
  //   </Highlight>
  // );
};
