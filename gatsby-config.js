const path = require(`path`)

module.exports = {
siteMetadata: {
    title: `Cornell Soares`,
    description: `Developer`,
    author: `@cornellsoares`,
    url: "http://cornellsoares.com"
    },
    plugins: [
      `gatsby-plugin-styled-components`,
      
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: path.join(__dirname, `static`, `images`),
        },
      },
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
    ],
  }