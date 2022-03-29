import React from "react"
import SideProjects from "../components/sideprojects"
import Layout from "../components/layout"
import { SingleColumn, SingleColumnMain } from "../components/base"

const Projects = () => {
  return (
    <Layout>
      <SingleColumnMain>
        <SingleColumn>
          <SideProjects/>
        </SingleColumn>
      </SingleColumnMain>
    </Layout>
  )
}

export default Projects
