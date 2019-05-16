import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { useMDXComponents, mdx } from '@mdx-js/react';
import { Box, theme as radixTheme } from '@modulz/radix';
const { colors } = radixTheme;

const theme = {
  plain: {
    color: colors.blues[6],
    backgroundColor: colors.blues[1],
  },
  styles: [
    {
      types: ['prolog', 'constant', 'builtin'],
      style: {
        color: colors.blues[6],
      },
    },
    {
      types: ['inserted', 'function'],
      style: {
        color: colors.blues[6],
      },
    },
    {
      types: ['deleted'],
      style: {
        color: colors.blues[6],
      },
    },
    {
      types: ['changed'],
      style: {
        color: colors.blues[6],
      },
    },
    {
      types: ['punctuation', 'symbol'],
      style: {
        color: colors.blues[3],
      },
    },
    {
      types: ['string', 'char', 'tag', 'selector'],
      style: {
        color: colors.blue,
      },
    },
    {
      types: ['keyword', 'variable'],
      style: {
        color: colors.blues[6],
      },
    },
    {
      types: ['comment'],
      style: {
        color: colors.gray,
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: colors.blues[7],
      },
    },
  ],
};

export default ({ children, className, live, render, ghost }) => {
  const components = useMDXComponents();

  const liveProviderProps = {
    transformCode: code => '/* @jsx mdx */' + code,
    scope: { mdx, ...components },
  };

  if (live) {
    return (
      <Box mt={5}>
        <LiveProvider
          code={children.trim()}
          {...liveProviderProps}
          theme={theme}
        >
          <LivePreview
            style={{
              padding: !ghost && radixTheme.space[4],
              border: !ghost && `1px solid ${colors.grays[3]}`,
              borderRadius: !ghost && '3px 3px 0 0',
              borderBottom: 0,
            }}
          />
          <LiveEditor
            padding={!ghost && radixTheme.space[4]}
            style={{
              // TODO: Remove hardcoded `backgroundColor`
              // https://github.com/FormidableLabs/react-live/issues/139
              backgroundColor: theme.plain.backgroundColor,
              borderRadius: !ghost && '0 0 3px 3px',
              border: !ghost && `1px solid ${colors.grays[3]}`,
              borderTop: 0,
              fontSize: radixTheme.fontSizes[3],
              fontFamily: radixTheme.fonts.mono,
              lineHeight: radixTheme.lineHeights[0],
            }}
            css={{ textarea: { outline: 0 } }}
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
