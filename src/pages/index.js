import React from "react"
import Layout from "../components/layout"
import About from "../components/about"
import { graphql } from 'gatsby'

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "stick.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const IndexPage = () => {
  return (
    <Layout>
<About></About>
    </Layout>
  )
}

export default IndexPage
