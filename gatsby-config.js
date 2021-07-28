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
        disableOnDev: true,
        reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
      }
    },
    `gatsby-plugin-styled-components`,
    // `gatsby-plugin-offline`,
  ],
};
