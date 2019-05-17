module.exports = {
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: 'hsl(208, 98%, 50%)',
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.md', '.mdx'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/src/docs/`,
      },
    },
  ],
};
