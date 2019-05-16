import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { Flex, Box, Menu, MenuItem, Heading, Divider } from '@modulz/radix';
import { Logo } from './Logo';

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
        <Flex minHeight="100vh" flexDirection={['column', 'row']}>
          <Box
            width={['100%', 200]}
            flex="0 0 auto"
            pt={4}
            borderRight={[0, '1px solid']}
            borderBottom={['1px solid', 0]}
            borderColor={['grays.2', 'grays.2']}
          >
            <Heading size={1} marginLeft={3} mb={2} bold>
              <Flex alignItems="center">
                <Box mr={2}>
                  <Logo />
                </Box>{' '}
                Radix
              </Flex>
            </Heading>

            <Divider />

            <Menu>
              {data.pinned.edges.map(({ node }) => (
                <MenuItem
                  key={node.frontmatter.title}
                  as={Link}
                  to={node.fields.slug}
                  variant={pathname === node.fields.slug ? 'active' : undefined}
                >
                  {node.frontmatter.title}
                </MenuItem>
              ))}
            </Menu>

            <Divider mb={1} />

            <Menu>
              <Heading size={0} bold mx={3} mb={2}>
                Components
              </Heading>
              {data.components.edges.map(({ node }) => (
                <MenuItem
                  key={node.frontmatter.title}
                  as={Link}
                  to={node.fields.slug}
                  variant={pathname === node.fields.slug ? 'active' : undefined}
                >
                  {node.frontmatter.title}
                </MenuItem>
              ))}
            </Menu>

            <Divider mb={1} />

            <Menu>
              <Heading size={0} bold mx={3} mb={2}>
                Recipes
              </Heading>
              {data.recipes.edges.map(({ node }) => (
                <MenuItem
                  key={node.frontmatter.title}
                  as={Link}
                  to={node.fields.slug}
                  variant={pathname === node.fields.slug ? 'active' : undefined}
                >
                  {node.frontmatter.title}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box p={4} flex={[1, 1]} maxWidth={['100%', '45rem']}>
            {children}
          </Box>
        </Flex>
      )}
    />
  );
}

export default DocLayout;
