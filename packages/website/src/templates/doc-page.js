import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import * as RadixComponents from 'radix-poc';
import DocLayout from '../components/DocLayout';
import CodeBlock from '../components/CodeBlock';

export const components = {
  ...RadixComponents,
  pre: props => <div {...props} />,
  code: CodeBlock,
};

function DocPageTemplate({ data, location, ...props }) {
  const children = <MDXRenderer children={data.mdx.code.body} />;

  return (
    <DocLayout pathname={location.pathname}>
      <MDXProvider components={components}>
        <RadixComponents.Box>
          <RadixComponents.Heading fontSize={6}>
            {data.mdx.frontmatter.title}
          </RadixComponents.Heading>
          {children}
        </RadixComponents.Box>
      </MDXProvider>
    </DocLayout>
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
