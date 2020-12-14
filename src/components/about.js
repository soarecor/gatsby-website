import React from "react"
import styled from "styled-components"
import { Main,  devices  } from "./base"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

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

const About = () => {
    const data = useStaticQuery(query)
    return (
      <Main>
        <ImageContainer>
          <Image
            fluid={data.fileName.childImageSharp.fluid}
            alt="stick man"
          />
        </ImageContainer>
        <Article>      
          <BigP>Hey!</BigP>
          <SmallDiv>  Nice to see you at this corner of the internet.</SmallDiv>
          <SmallDiv>  <span> I’m Cornell </span> - a web developer, problem solver, lifelong learner, sustainability advocate, futurist, wannabe ux reseacher, electrical engineer .... <span className="sidenote">(Really trying to fit it all in here, but seriously - let's grab a coffee post covid)</span>
</SmallDiv>
  <SmallDiv>  I’m a third culture kid, fortunate to have been educated at McMaster University  and Sheridan College. My unique cultural experiences have enabled me to have a global insight into product usability. I try to apply this by building and advocating for experiences that are universally usable across various demographics. 
</SmallDiv>
  </Article>
      </Main>
    )
  }
  
  export default About
  