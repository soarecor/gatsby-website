import React from "react"
import Experience from "../components/experience"
import Layout from "../components/layout"
import { SingleColumn, SingleColumnMain } from "../components/base"

const WorkPage = () => {
  return (
        <Layout>
          <SingleColumnMain>
            <SingleColumn>
              <Experience/>
            </SingleColumn>
          </SingleColumnMain>
        </Layout>
  )
}

export default WorkPage
