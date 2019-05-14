import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import * as RadixComponents from 'radix-poc';
import DocLayout from '../components/DocLayout';
import CodeBlock from '../components/CodeBlock';
import { Logo } from '../components/Logo';
import * as StyledSystem from 'styled-system';

function SystemProps({ props }) {
  return (
    <RadixComponents.Box mb={4}>
      <RadixComponents.Table>
        <RadixComponents.Thead>
          <RadixComponents.Tr>
            <RadixComponents.Th>Name</RadixComponents.Th>
            <RadixComponents.Th>Props</RadixComponents.Th>
          </RadixComponents.Tr>
        </RadixComponents.Thead>
        <RadixComponents.Tbody>
          {props.map(prop => (
            <RadixComponents.Tr>
              <RadixComponents.Td>{prop}</RadixComponents.Td>
              <RadixComponents.Td>
                <RadixComponents.Box>
                  {Object.keys(StyledSystem[prop].propTypes).map(p => (
                    <RadixComponents.Code mr={1}>{p}</RadixComponents.Code>
                  ))}
                </RadixComponents.Box>
              </RadixComponents.Td>
            </RadixComponents.Tr>
          ))}
        </RadixComponents.Tbody>
      </RadixComponents.Table>
    </RadixComponents.Box>
  );
}

export const components = {
  ...RadixComponents,
  pre: props => <div {...props} />,
  code: CodeBlock,
  Logo: Logo,
  table: RadixComponents.Table,
  thead: RadixComponents.Thead,
  tbody: RadixComponents.Tbody,
  tfoot: RadixComponents.Tfoot,
  tr: RadixComponents.Tr,
  th: RadixComponents.Th,
  td: RadixComponents.Td,
  inlineCode: RadixComponents.Code,
  h1: props => (
    <RadixComponents.Heading {...props} bold size={3} mt={8} mb={4} />
  ),
  h2: props => (
    <RadixComponents.Heading {...props} bold size={2} mt={8} mb={4} />
  ),
  h3: props => (
    <RadixComponents.Heading {...props} bold size={1} mt={8} mb={4} />
  ),
  SystemProps: SystemProps,
};

function DocPageTemplate({ data, location, ...props }) {
  const children = <MDXRenderer children={data.mdx.code.body} />;

  return (
    <DocLayout pathname={location.pathname}>
      <MDXProvider components={components}>
        <RadixComponents.Box>
          <RadixComponents.Heading size={3} bold>
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
        component
      }
      code {
        body
      }
    }
  }
`;
