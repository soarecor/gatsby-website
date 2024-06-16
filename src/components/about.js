import React from "react"
import styled from "styled-components"
import { Main,  devices  } from "./base"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { StyledLink } from "./base"

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "dank3.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
const ImageContainer = styled.div`
  max-width: 100%;
  width: 100%;
  justify-self: center;
  position: relative;
  @media ${devices.tablet} {
    width: 225px;
    max-width: 225px;
  }
`

const Article = styled.p`
  color: var(--fontPrimary);
  margin-bottom: 0.25rem;
  --mono: "MONO" .7;
  --casl: "CASL" 0;
  --wght: "wght" 300;
  --slnt: "slnt" 0;
  --CRSV: "CRSV" 0.5;
`

const BigP = styled.span`
    color: var(--accentPrimary);
    margin-bottom: 0.5rem;
    font-size: 4rem;
    --mono: "MONO" 1;
  --casl: "CASL" 0.5;
  --wght: "wght" 348;
  --slnt: "slnt" 0;
  --CRSV: "CRSV" 1;
`

const SmallP = styled.span`
    font-size: 1.2rem;
`
const SmallDiv = styled.div`
    font-size: 1.1rem;
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

const NftLink = styled(StyledLink)`
  position: absolute;
  bottom: -1.5rem;
  transform: translate(70%);
  &:hover,
  &:focus,
  &.isActive {
    color: var(--fontPrimary);
  }
  @media ${devices.tablet} {
    transform: translate(55%);
  }
`

const About = () => {
    const data = useStaticQuery(query)
    return (
      <>
        <Main>
          <ImageContainer>
            <Image
              fluid={data.fileName.childImageSharp.fluid}
              alt="stick man"
            />
          </ImageContainer>
          <Article>      
            <BigP>H</BigP><SmallP>ello.</SmallP>
            <SmallDiv> I’m Cornell - a product-oriented web developer, lifelong learner, sustainability advocate, futurist and ux enthusiast.
            </SmallDiv>
              <SmallDiv>  I’m a third culture individual, educated at McMaster University  and Sheridan College. I use my unique cultural experiences as a lens to gauge product usability on a global level. 
            </SmallDiv>
          </Article>
        </Main>
      </>
    )
  }
  
  export default About
  