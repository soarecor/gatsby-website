import React from "react"
import Layout from "../components/layout"
import Paint from "../components/paint"
import { CreatePageSection, CreatePage } from "../components/base"

const Creations = () => {
  return (
    <Layout>
        <CreatePage>
          <CreatePageSection>
            <Paint />
          </CreatePageSection>
        </CreatePage>
    </Layout>
  )
}

export default Creations
