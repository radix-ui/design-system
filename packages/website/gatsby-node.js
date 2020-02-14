/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  const postTemplate = path.resolve('./src/templates/doc-page.js');
  const defaultPath = '/docs/getting-started/';

  const allDocs = await graphql(
    `
      {
        allMdx(limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  if (allDocs.errors) {
    console.error(`Error in allDocs: ${allDocs.errors}`);
    throw Error(`Error in allDocs: ${allDocs.errors}`);
  }

  // Dynamically create a page for each markdown file with layout: post
  allDocs.data.allMdx.edges.forEach((post, index) => {
    const { slug } = post.node.fields;

    createPage({
      path: slug,
      component: postTemplate,
      context: {
        slug,
      },
    });
  });

  createRedirect({
    fromPath: `/`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: defaultPath,
  });

  createRedirect({
    fromPath: `/docs`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: defaultPath,
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const slug = path.join('/', 'docs', createFilePath({ node, getNode }));

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};
