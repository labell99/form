module.exports = {
  pathPrefix: '/form',
  siteMetadata: {
    title: ``,
    description: ``,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-theme-material-ui`,
    `gatsby-plugin-csp`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: false
      }
    },
    `gatsby-plugin-styled-components`,
    // `gatsby-plugin-offline`,
  ],
};
