import React, {useState} from "react"
import styled from "styled-components"
import { Main,  devices  } from "./base"
import { useStaticQuery, graphql } from "gatsby"
import {Triangles} from "./sketches/triangles" //himalaya
import {Stars} from "./sketches/stars" //infrared
import {Circle} from "./sketches/circle"  //kelp
import {Grad} from "./sketches/gradient" //Sun Coral
// import {Web} from "./sketches/webgl" //Sun Coral


const FlexContainer =styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin-bottom: 2rem;
`

const FlexButton = styled.span`
  color: var(--fontPrimary);
  padding: 1rem 2rem 0.25rem;
  margin: 0rem 0.5rem 0 0.5rem;
  font-size: 1rem;
  color: var(--accentPrimary);
        --wght: "wght" 390;
        --slnt: "slnt" -3;
        --CRSV: "CRSV" 1;
  &.isSelected {
    color: var(--fontPrimary);
    border-bottom: 2px solid var(--accentPrimary)
  }
`
const SmallDiv = styled.div`
    margin-bottom: 1rem;
    line-height: 1.8rem;
    margin: 1rem 0.5rem;
    font-size: 1rem;
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
    const [selectedPaint, setPaint] = useState('Himalaya')
    // selectedPaint -> reactive value; setPaint -> setter
    let paints = ['Himalaya', 'Infrared', 'Sun Coral', 'Kelp', ]

    const isCurrentPaint = (paint) => paint === selectedPaint
      return (
        <>
        <SmallDiv className="sidenote">Choose a canvas and use your mouse to draw in the blank space below</SmallDiv>
        <FlexContainer>
        {paints.map((paint, index) => <FlexButton  key={index} className={`${isCurrentPaint(paint) ? 'isSelected' : ''}`} onClick={()=>setPaint(paint)}> {paint}</FlexButton>)}
        </FlexContainer>
            {
                selectedPaint === 'Himalaya' ? < Triangles /> :
                selectedPaint === 'Infrared' ? <Stars /> :
                selectedPaint === 'Sun Coral' ? <Grad /> : <Circle />
            }
        </>
      )
  }
  
  export default Paint
  