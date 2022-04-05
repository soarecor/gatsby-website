import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Sidebar from "./sidebar"
import styled from "styled-components"
import { devices } from "./base"

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content auto;
  /* border: 5px solid pink; */
  min-height: 100vh;
  width: 100vw;
  background-color: var(--contentBg);

  @media ${devices.tablet} {
    grid-template-columns: max-content auto;
  }
`

const Main = styled.div`
  display: flex;
  font-size: 14px;
  padding: 0;
  overflow-y: scroll auto;
  height: inherit;
  @media ${devices.tablet} {
    min-height: 100vh;
  }
`

function TwoColumnLayout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <>
      <TwoColumnGrid>
        <Sidebar siteTitle={title} />
        <Main>
          {children}
        </Main>
      </TwoColumnGrid>
    </>
  )
}

export default TwoColumnLayout
