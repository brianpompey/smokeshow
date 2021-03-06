module.exports = {
  siteMetadata: {
    title: `SmokeShow`,
    description: `The one stop shop for your outdoor culinary solutions!`,
    author: `@brianpompey - chefpompei`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
			resolve: 'gatsby-plugin-snipcart',
			options: {
				apiKey: 'MzQ3ODRiYzUtYWMyZi00OWRiLWE4MjAtZmIzOWYxNTMzNTY2NjM3NTMxNTIxOTQxNjg4Nzg2',
        autopop: true
			}
		},
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
