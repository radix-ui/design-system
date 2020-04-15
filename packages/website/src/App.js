import React, { useState } from 'react';
import {
  Badge,
  Box,
  Container,
  Divider,
  Flex,
  IconButton,
  Link,
  List,
  Subheading,
  Text,
} from '@modulz/radix';
import { CrossIcon, HamburgerIcon } from '@modulz/radix-icons';
import { graphql, StaticQuery } from 'gatsby';
import NavItem from './components/NavItem';
import pkg from '../package.json';

function App({ element, props }) {
  const [navOpen, setNavOpen] = useState(false);

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
        sort: { order: ASC, fields: [frontmatter___order] }
        filter: { frontmatter: { pinned: { ne: null }, hidden: { eq: null } } }
      ) {
        ...mdxContent
      }
      components: allMdx(
        sort: { order: ASC, fields: [frontmatter___component] }
        filter: { frontmatter: { component: { ne: null } } }
      ) {
        ...mdxContent
      }
      # recipes: allMdx(
      #   sort: { order: ASC, fields: [frontmatter___title] }
      #   filter: { frontmatter: { recipe: { ne: null } } }
      # ) {
      #   ...mdxContent
      # }
    }
  `;

  const pathname = props.location.pathname;

  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <>
            <Box
              pb={[0, 8]}
              sx={{
                position: ['static', 'fixed'],
                width: ['100%', 200, 250],
                height: ['auto', '100vh'],
                overflow: ['auto', 'scroll'],
                borderRight: [0, '1px solid'],
                borderBottom: ['1px solid', 0],
                borderColor: ['gray300', 'gray300'],
                WebkitOverflowScrolling: 'touch',
                overflowX: 'hidden',
              }}
            >
              <Box py={2} px={4}>
                <Flex sx={{ alignItems: 'center' }}>
                  <Box>
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 26.5L4 31V22L10 26.5Z" />
                      <path d="M10 14.5L4 19V10L10 14.5Z" />
                      <path d="M17 8.5L11 13V4L17 8.5Z" />
                      <path d="M24 14.5L18 19V10L24 14.5Z" />
                      <path d="M31 8.5L25 13V4L31 8.5Z" />
                      <path d="M31 20.5L25 25V16L31 20.5Z" />
                      <path d="M10 25L4 20.5L10 16V25Z" />
                      <path d="M17 19L11 14.5L17 10V19Z" />
                      <path d="M10 13L4 8.5L10 4V13Z" />
                      <path d="M24 13L18 8.5L24 4V13Z" />
                      <path d="M31 19L25 14.5L31 10V19Z" />
                      <path d="M31 31L25 26.5L31 22V31Z" />
                    </svg>
                  </Box>
                  <Badge ml={3} variant="gray">
                    {pkg.version}
                  </Badge>
                  <Box ml="auto" sx={{ display: ['block', 'none'] }}>
                    <IconButton
                      size={1}
                      variant={navOpen ? 'active' : undefined}
                      onClick={() => setNavOpen(!navOpen)}
                    >
                      {!navOpen && <HamburgerIcon />}
                      {navOpen && <CrossIcon />}
                    </IconButton>
                  </Box>
                </Flex>
              </Box>

              <Box sx={{ display: [navOpen ? 'block' : 'none', 'block'] }}>
                <Divider mb={1} />
                <List>
                  <Subheading mx={5} my={2}>
                    Overview
                  </Subheading>
                  {data.pinned.edges.map(({ node }) => (
                    <NavItem
                      key={node.frontmatter.title}
                      to={node.fields.slug}
                      active={pathname === node.fields.slug}
                      onClick={() => setNavOpen(false)}
                    >
                      {node.frontmatter.title}
                    </NavItem>
                  ))}
                </List>

                <Divider mb={1} />

                <List>
                  <Subheading mx={5} my={2}>
                    Components
                  </Subheading>
                  {data.components.edges.map(({ node }) => (
                    <NavItem
                      key={node.frontmatter.title}
                      to={node.fields.slug}
                      active={pathname === node.fields.slug}
                      onClick={() => setNavOpen(false)}
                    >
                      {node.frontmatter.title}
                    </NavItem>
                  ))}
                </List>

                <Divider mb={1} />

                {/* <List>
                  <Subheading mx={5} my={2}>
                    Recipes
                  </Subheading>
                  {data.recipes.edges.map(({ node }) => (
                    <NavItem
                      key={node.frontmatter.title}
                      to={node.fields.slug}
                      active={pathname === node.fields.slug}
                      onClick={() => setNavOpen(false)}
                    >
                      {node.frontmatter.title}
                    </NavItem>
                  ))}
                </List>

                <Divider mb={1} /> */}

                <List>
                  <Subheading mx={5} my={2}>
                    GitHub links
                  </Subheading>

                  <NavItem as="a" href="https://github.com/modulz/radix" isExternal>
                    Radix
                  </NavItem>
                  <NavItem
                    as="a"
                    href="https://github.com/modulz/radix/tree/master/packages/radix-system"
                    isExternal
                  >
                    Radix System
                  </NavItem>
                  <NavItem
                    as="a"
                    href="https://github.com/modulz/radix/tree/master/packages/website"
                    isExternal
                  >
                    Radix Docs
                  </NavItem>
                </List>

                <Divider mb={1} />

                <Box px={5} mb={2} mt={3} sx={{ minHeight: 6 }}>
                  <Text size={2}>
                    Powered by{' '}
                    <Link href="https://modulz.app" title="Modulz">
                      Modulz
                    </Link>
                  </Text>
                </Box>
              </Box>
            </Box>

            <Box
              pt={8}
              pb={9}
              marginLeft={[0, 200, 250]}
              sx={{
                maxWidth: ['100%'],
                display: [navOpen ? 'none' : 'block', 'block'],
              }}
            >
              <Container size={1}>{element}</Container>
            </Box>
          </>
        );
      }}
    />
  );
}

export default App;
