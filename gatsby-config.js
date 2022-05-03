const path = require(`path`)

module.exports = {
siteMetadata: {
    title: `Cornell Soares`,
    description: `Developer`,
    author: `@cornellsoares`,
    url: "http://cornellsoares.com"
    },
    plugins: [
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          // The property ID; the tracking code won't be generated without it
          trackingId: "UA-75466107-1",
          // Defines where to place the tracking script - `true` in the head and `false` in the body
          head: true,
          // Setting this parameter is optional
          anonymize: true
        },
      },
      `gatsby-plugin-styled-components`,
      
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: path.join(__dirname, `static`, `images`),
        },
      },
      {
        resolve:`gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md` ]
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/blog`
        }
      },
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
    ],
  }