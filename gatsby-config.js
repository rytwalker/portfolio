module.exports = {
  siteMetadata: {
    title: 'Ryan Walker | Developer',
    description: 'A portfolio site'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts'
      }
    },
    'gatsby-transformer-remark'
  ]
};
