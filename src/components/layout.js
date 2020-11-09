/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

// import { ThemeProvider } from "../hooks/theme-context"
import TwoColumnLayout from "./two-column-layout"
import styled from "styled-components"
import '../styles/globalStyles.css';
import 'normalize.css';



const FlexContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;

  * {
    font-family: var(--variableFontFamily);
    font-variation-settings: var(--mono), var(--casl), var(--wght), var(--slnt),
      var(--CRSV);
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <FlexContainer>
        <TwoColumnLayout>{children}</TwoColumnLayout>
      </FlexContainer>
    </>
  )
}


export default Layout
