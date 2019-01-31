module.exports = {
  siteMetadata: {
    title: `ReactWeek`,
    description: `Developer Week: React`,
    author: `@globant`,
  },
  pathPrefix: "/sgomezglobant/reactweek",
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
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
    // {
    //   resolve: `gatsby-plugin-google-tagmanager`,
    //   options: {
    //     id: "UA-132930830-1",
  
    //     // Include GTM in development.
    //     // Defaults to false meaning GTM will only be loaded in production.
    //     includeInDevelopment: true,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
