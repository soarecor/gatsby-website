import React from "react"
import styled from "styled-components"
import { Main,  devices  } from "./base"
import { useStaticQuery, graphql } from "gatsby"
import {Triangles} from "./sketches/triangles"
import {Stars} from "./sketches/stars"
import {Circle} from "./sketches/circle"
import {Web} from "./sketches/webgl"
import {Grad} from "./sketches/gradient"



export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "Jesse.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
const ImageContainer = styled.div`
  max-width: 50px;
  width: 50px;
  justify-self: center;
  @media ${devices.tablet} {
    width: 140px;
    max-width: 140px;
  }
`

const Article = styled.p`
  color: var(--fontPrimary);
  margin-bottom: 0.25rem;
  --mono: "MONO" 0;
  --casl: "CASL" 0;
  --wght: "wght" 300;
  --slnt: "slnt" 0;
  --CRSV: "CRSV" 0.5;
`

const BigP = styled.span`
    display:block;
    color: var(--accentPrimary);
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    --mono: "MONO" 0;
  --casl: "CASL" 0;
  --wght: "wght" 348;
  --slnt: "slnt" 0;
  --CRSV: "CRSV" 0.5;
`
const SmallDiv = styled.div`
    font-size: 1.2rem;
    margin-bottom: 1rem;
    line-height: 1.8rem;
    span {
        font-size: 1.5rem;
        color: var(--accentPrimary);
        --wght: "wght" 390;
        --slnt: "slnt" -3;
        --CRSV: "CRSV" 1;
    }
    .sidenote {
        font-size: 1rem;
        color: var(--fontPrimary);
        --wght: "wght" 290;
        --CRSV: "CRSV" 1;
        --slnt: "slnt" 0;
        --CASL: "CASL" 1;
    }
`


const Paint = () => {
    const data = useStaticQuery(query)
      return (
            <Grad />
      )
  }
  
  export default Paint
  