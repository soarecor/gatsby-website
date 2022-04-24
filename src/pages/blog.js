import React from "react"
import Layout from "../components/layout"
import BlogPosts from "../components/blogPosts"
import { SingleColumn, SingleColumnMain } from "../components/base"


const IndexPage = () => {
    return (
      <Layout>
        <SingleColumnMain>
            <SingleColumn>
                <BlogPosts/>
            </SingleColumn>
        </SingleColumnMain>
      </Layout>
    )
  }

  export default IndexPage