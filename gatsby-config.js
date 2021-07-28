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
        mergeScriptHashes: true, // you can disable scripts sha256 hashes
        mergeStyleHashes: true, // you can disable styles sha256 hashes
	        mergeDefaultDirectives: true,
	        directives: {
	          "script-src": "'self' www.google-analytics.com",
	          "style-src": "'self' 'unsafe-inline'",
	          "img-src": "'self' data: www.google-analytics.com"
	          // you can add your directives or override defaults
	        }
      }
    },
    `gatsby-plugin-styled-components`,
    // `gatsby-plugin-offline`,
  ],
};
