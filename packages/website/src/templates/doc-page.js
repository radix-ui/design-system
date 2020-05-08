import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as RC from '@modulz/radix';
import * as RI from '@modulz/radix-icons';
import { DebugContextProvider } from '@modulz/primitives';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';
import { PropsTable } from '../components/PropsTable';
import { ThemeSection } from '../components/ThemeSection';
import { APISection } from '../components/APISection';

export const components = {
  ...RC,
  ...RI,
  pre: props => <div {...props} />,
  code: CodeBlock,
  table: RC.Table,
  thead: RC.Thead,
  tbody: RC.Tbody,
  tfoot: RC.Tfoot,
  tr: RC.Tr,
  th: RC.Th,
  td: RC.Td,
  inlineCode: RC.Code,
  a: RC.Link,
  PropsTable: PropsTable,
  h1: props => <RC.Heading {...props} size={3} mt={8} mb={4} />,
  h2: props => <RC.Heading {...props} as="h2" size={2} mt={8} mb={4} />,
  h3: props => <RC.Heading {...props} as="h3" size={1} mt={7} mb={1} sx={{ lineHeight: 1 }} />,
  h4: props => <RC.Heading {...props} as="h4" size={0} mt={6} mb={1} sx={{ lineHeight: 2 }} />,
  p: props => <RC.Text {...props} as="p" size={3} sx={{ lineHeight: 2, color: 'gray700' }} />,
  Prop: props => (
    <RC.Box mb={3}>
      <RC.Text as="p" size={2} sx={{ lineHeight: 2, color: 'gray700' }}>
        {props.isOptional && 'optional'}{' '}
        <RC.Code ml={!props.isOptional && -1}>{props.children}</RC.Code>
      </RC.Text>
      {props.default && (
        <RC.Text as="p" size={2} sx={{ lineHeight: 2, color: 'gray700' }}>
          default <RC.Code>{props.default}</RC.Code>
        </RC.Text>
      )}
    </RC.Box>
  ),
  ThemeSection,
  APISection,
};

function DocPageTemplate({ data, location, ...props }) {
  const children = <MDXRenderer children={data.mdx.body} />;

  return (
    <Layout pathname={location.pathname}>
      <Helmet>
        <title>Radix — {data.mdx.frontmatter.title}</title>
        <meta property="og:title" content={`Radix — ${data.mdx.frontmatter.title}`} />
        <meta property="og:description" content={data.mdx.frontmatter.description} />
        <meta name="twitter:title" content={`Radix — ${data.mdx.frontmatter.title}`} />
        <meta name="twitter:description" content={data.mdx.frontmatter.description} />
      </Helmet>

      <MDXProvider components={components}>
        <RC.Box>
          <RC.Heading size={4} mb={2} sx={{ lineHeight: 4 }}>
            {data.mdx.frontmatter.title}
          </RC.Heading>
          <RC.Heading
            size={1}
            weight="normal"
            mb={7}
            as="h2"
            sx={{ lineHeight: 3, color: 'gray700' }}
          >
            {data.mdx.frontmatter.description}
          </RC.Heading>
          {data.mdx.frontmatter.disableLock === true ? (
            <DebugContextProvider disableLock>{children}</DebugContextProvider>
          ) : (
            children
          )}
        </RC.Box>
      </MDXProvider>
    </Layout>
  );
}

export default DocPageTemplate;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        component
        description
        disableLock
      }
      body
    }
  }
`;
