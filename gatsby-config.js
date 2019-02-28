module.exports = {
  siteMetadata: {
    title: `ReactWeek`,
    description: `Developer Week: React`,
    author: `@globant`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `react-developer-week`,
        short_name: `reactweek`,
        start_url: `/`,
        background_color: `#7eb51e`,
        theme_color: `#7eb51e`,
        display: `standalone`,
        icon: `src/images/reactweek-logo.png` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline'
  ]
};
