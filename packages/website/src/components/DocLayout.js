import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import {
  Flex,
  Box,
  Menu,
  MenuItem,
  Heading,
  Badge,
  Divider,
  Text,
} from '@modulz/radix';
import NavItem from './NavItem';

function DocLayout({ children, pathname }) {
  const query = graphql`
    fragment mdxContent on MdxConnection {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
    query {
      pinned: allMdx(
        sort: { order: ASC, fields: [frontmatter___title] }
        filter: { frontmatter: { pinned: { ne: null } } }
      ) {
        ...mdxContent
      }
      components: allMdx(
        sort: { order: ASC, fields: [frontmatter___title] }
        filter: { frontmatter: { component: { ne: null } } }
      ) {
        ...mdxContent
      }
      recipes: allMdx(
        sort: { order: ASC, fields: [frontmatter___title] }
        filter: { frontmatter: { recipe: { ne: null } } }
      ) {
        ...mdxContent
      }
    }
  `;

  return (
    <StaticQuery
      query={query}
      render={data => (
        <Box>
          <Box
            position={['static', 'fixed']}
            width={['100%', 200]}
            height={['auto', '100vh']}
            overflow="auto"
            pt={4}
            pb={4}
            borderRight={[0, '1px solid']}
            borderBottom={['1px solid', 0]}
            borderColor={['grays.2', 'grays.2']}
          >
            <Heading size={1} ml={3} mb={4} bold>
              <Flex alignItems="center">
                Radix{' '}
                <Badge ml={2} variant="gray">
                  Alpha
                </Badge>
              </Flex>
            </Heading>

            <Divider />

            <Menu>
              {data.pinned.edges.map(({ node }) => (
                <NavItem
                  key={node.frontmatter.title}
                  to={node.fields.slug}
                  active={pathname === node.fields.slug}
                  label={node.frontmatter.title}
                />
              ))}
            </Menu>

            <Divider mb={1} />

            <Menu>
              <Heading size={0} bold mx={3} mb={2}>
                Components
              </Heading>
              {data.components.edges.map(({ node }) => (
                <NavItem
                  key={node.frontmatter.title}
                  to={node.fields.slug}
                  active={pathname === node.fields.slug}
                  label={node.frontmatter.title}
                />
              ))}
            </Menu>

            <Divider mb={1} />

            <Menu>
              <Heading size={0} bold mx={3} mb={2}>
                Recipes
              </Heading>
              {data.recipes.edges.map(({ node }) => (
                <NavItem
                  key={node.frontmatter.title}
                  to={node.fields.slug}
                  active={pathname === node.fields.slug}
                  label={node.frontmatter.title}
                />
              ))}
            </Menu>
          </Box>
          <Box p={4} marginLeft={[0, 200]} maxWidth={['100%', '45rem']}>
            {children}
          </Box>
        </Box>
      )}
    />
  );
}

export default DocLayout;
