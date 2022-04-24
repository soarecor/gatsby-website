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