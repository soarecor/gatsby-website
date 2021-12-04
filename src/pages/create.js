import React from "react"
import Layout from "../components/layout"
import Paint from "../components/paint"
import { SingleColumn, SingleColumnMain } from "../components/base"

const Creations = () => {
  return (
        <Layout>
          <SingleColumnMain>
            <SingleColumn>
              <Paint />
            </SingleColumn>
          </SingleColumnMain>
        </Layout>
  )
}

export default Creations
