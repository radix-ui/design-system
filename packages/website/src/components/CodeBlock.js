import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { useMDXComponents, mdx } from '@mdx-js/react';
import { Box, theme as radixTheme } from '@modulz/radix';
const { colors } = radixTheme;

const theme = {
  plain: {
    color: colors.grays[7],
    backgroundColor: colors.grays[0],
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#999988',
        fontStyle: 'italic',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: '#e3116c',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: '#393A34',
      },
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted',
      ],
      style: {
        color: '#36acaa',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: '#00a4db',
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: '#d73a49',
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: '#6f42c1',
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: colors.blues[6],
      },
    },
  ],
};

export default ({ children, className, live, render, ghost }) => {
  const components = useMDXComponents();

  const liveProviderProps = {
    transformCode: code => `/* @jsx mdx */ <> ${code} </>`,
    scope: { mdx, ...components },
  };

  if (live) {
    return (
      <Box my={5}>
        <LiveProvider code={children.trim()} {...liveProviderProps} theme={theme}>
          <LivePreview
            style={{
              padding: radixTheme.space[4],
              border: `1px solid ${colors.grays[2]}`,
              borderRadius: '3px 3px 0 0',
            }}
          />
          <LiveEditor
            padding={radixTheme.space[4]}
            style={{
              borderRadius: '0 0 3px 3px',
              border: `1px solid ${colors.grays[2]}`,
              borderTop: 'none',
              fontSize: radixTheme.fontSizes[3],
              fontFamily: radixTheme.fonts.mono,
              fontWeight: 400,
              letterSpacing: '-0.0175em',
              lineHeight: 1.35,
            }}
            css={{ textarea: { outline: 0 } }}
          />
          <LiveError />
        </LiveProvider>
      </Box>
    );
  }

  return (
    <Box my={5}>
      <LiveProvider code={children.trim()} {...liveProviderProps} theme={theme}>
        <LiveEditor
          padding={radixTheme.space[4]}
          style={{
            borderRadius: '3px',
            border: `1px solid ${colors.grays[2]}`,
            fontSize: radixTheme.fontSizes[3],
            fontFamily: radixTheme.fonts.mono,
            fontWeight: 400,
            letterSpacing: '-0.0175em',
            lineHeight: 1.35,
          }}
          css={{ textarea: { paddingBottom: '0 !important' } }}
          disabled
        />
      </LiveProvider>
    </Box>
  );
};
