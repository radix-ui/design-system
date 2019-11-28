import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { useMDXComponents, mdx } from '@mdx-js/react';
import { Box, theme as radixTheme } from '@modulz/radix';
const { colors } = radixTheme;

const theme = {
  plain: {
    color: colors.gray800,
    backgroundColor: colors.gray100,
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
        color: '#e22881',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: colors.gray500,
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
        color: colors.blue600,
      },
    },
  ],
};

export default ({ children, live, removeFragment }) => {
  const components = useMDXComponents();

  const liveProviderProps = {
    transformCode: code => (removeFragment ? code : `<>${code}</>`),
    scope: { mdx, ...components },
  };

  if (live) {
    return (
      <Box mt={4}>
        <LiveProvider code={children.trim()} {...liveProviderProps} theme={theme}>
          <LivePreview
            style={{
              padding: radixTheme.space[3],
              border: `1px solid ${colors.gray400}`,
              borderTopLeftRadius: radixTheme.radii[2],
              borderTopRightRadius: radixTheme.radii[2],
            }}
          />

          <LiveEditor
            padding={radixTheme.space[3]}
            style={{
              borderBottomLeftRadius: radixTheme.radii[2],
              borderBottomRightRadius: radixTheme.radii[2],
              border: `1px solid ${colors.gray400}`,
              borderTop: 'none',
              fontSize: radixTheme.fontSizes[2],
              fontFamily: radixTheme.fonts.mono,
              fontWeight: 400,
              letterSpacing: '-0.0175em',
              lineHeight: 1.5,
            }}
            css={{ textarea: { outline: 0 } }}
          />

          <LiveError />
        </LiveProvider>
      </Box>
    );
  }

  return (
    <Box mt={4}>
      <LiveProvider code={children.trim()} {...liveProviderProps} theme={theme}>
        <LiveEditor
          padding={radixTheme.space[3]}
          style={{
            borderRadius: radixTheme.radii[2],
            border: `1px solid ${colors.gray400}`,
            fontSize: radixTheme.fontSizes[2],
            fontFamily: radixTheme.fonts.mono,
            fontWeight: 400,
            letterSpacing: '-0.0175em',
            lineHeight: 1.5,
          }}
          css={{ textarea: { paddingBottom: '0 !important' } }}
          disabled
        />
      </LiveProvider>
    </Box>
  );
};
