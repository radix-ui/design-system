import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import {
  RadixProvider,
  Flex,
  Box,
  Menu,
  MenuItem,
  MenuGroup,
  Heading,
} from 'radix-poc';

function DocLayout({ children, pathname }) {
  const query = graphql`
    query {
      allMdx {
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
    }
  `;

  return (
    <StaticQuery
      query={query}
      render={data => (
        <>
          <RadixProvider>
            <Flex minHeight="100vh">
              <Box
                maxWidth={200}
                flex={1}
                pt={4}
                borderRight="1px solid"
                borderColor="grays.2"
              >
                <Heading fontSize={4} pl={3} mb={2}>
                  Radix
                </Heading>

                <Menu variant="ghost">
                  <MenuGroup>
                    {data.allMdx.edges.map(({ node }) => {
                      if (
                        node.frontmatter.title === 'Getting Started' ||
                        node.frontmatter.title === 'Themes'
                      ) {
                        return (
                          <MenuItem
                            key={node.frontmatter.title}
                            as={Link}
                            to={node.fields.slug}
                            active={pathname === node.fields.slug}
                          >
                            {node.frontmatter.title}
                          </MenuItem>
                        );
                      }
                    })}
                  </MenuGroup>
                  {data.allMdx.edges.map(({ node }) => {
                    if (
                      node.frontmatter.title === 'Getting Started' ||
                      node.frontmatter.title === 'Themes'
                    ) {
                      return null;
                    }
                    return (
                      <MenuItem
                        key={node.frontmatter.title}
                        as={Link}
                        to={node.fields.slug}
                        active={pathname === node.fields.slug}
                      >
                        {node.frontmatter.title}
                      </MenuItem>
                    );
                  })}
                </Menu>
              </Box>
              <Box p={4} flex={1} maxWidth="45rem">
                {children}
              </Box>
            </Flex>
          </RadixProvider>
        </>
      )}
    />
  );
}

export default DocLayout;
