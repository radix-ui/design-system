import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import * as RC from '@modulz/radix';
import * as RI from '@modulz/radix-icons';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';
import { SystemPropsTable } from '../components/SystemPropsTable';

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
  h1: props => <RC.Heading {...props} fontWeight={500} size={3} mt={8} mb={4} />,
  h2: props => <RC.Heading {...props} as="h2" fontWeight={500} size={2} mt={8} mb={4} />,
  h3: props => (
    <RC.Heading {...props} as="h3" fontWeight={500} size={1} mt={7} mb={1} lineHeight={1} />
  ),
  p: props => <RC.Text {...props} as="p" size={3} m={0} lineHeight={1} textColor="grays.5" />,
  SystemProps: SystemPropsTable,
};

function DocPageTemplate({ data, location, ...props }) {
  const children = <MDXRenderer children={data.mdx.code.body} />;

  return (
    <Layout pathname={location.pathname}>
      <MDXProvider components={components}>
        <RC.Box>
          <RC.Heading size={4} fontWeight={500} mb={2} lineHeight={3}>
            {data.mdx.frontmatter.title}
          </RC.Heading>
          <RC.Heading size={1} mb={7} as="h2" lineHeight={2} textColor="grays.5">
            Coming soon. This is the description pulled from the primitive. It can be edited here by
            the user.
          </RC.Heading>
          {children}
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
      }
      code {
        body
      }
    }
  }
`;
