import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import * as RadixComponents from 'radix-poc';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';

export const components = {
  ...RadixComponents,
  pre: props => <div {...props} />,
  code: CodeBlock,
};

function DocPageTemplate({ data }) {
  const children = <MDXRenderer children={data.mdx.code.body} />;

  return (
    <MDXProvider components={components}>
      <Layout>{children}</Layout>
    </MDXProvider>
  );
}

export default DocPageTemplate;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`;
