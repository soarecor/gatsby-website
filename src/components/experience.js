import React from "react"
import styled from "styled-components"
import {workItems} from "../content/content"
import { devices  } from "./base"


const WorkItem = styled.div`
    max-width: 900px;
    padding: 3rem 1rem;
  .flex{
      display: flex;
      margin-bottom: 0.5rem;
      flex-direction: column;
      @media ${devices.tablet} {
       flex-direction: row;
       align-items: flex-end;
       justify-content: space-between;
    }
  }
  .name {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: var(--fontPrimary);
  --slnt: "slnt" -5;
  --wght: "wght" 383;
  --mono: "MONO" 1;
  }
  .title{
    color: var(--fontSecondary);
    font-size: 1rem;
  --slnt: "slnt" 0;
  --wght: "wght" 400;
  --mono: "MONO" 1;
  @media ${devices.tablet} {
    font-size: 1.5rem;
  }
  }
  .date{
    font-size: 0.7rem;
    margin-top: 0.4rem;
    @media ${devices.tablet} {
    font-size: 0.8rem;
  }
  }
  .description {
    line-height: 1.5rem;
    font-size: 1rem;
  }
  .pencil {
    font-size: 2rem;
    color: var(--fontSecondary);
  --slnt: "slnt" 0;
  --wght: "wght" 400;
  --mono: "MONO" 1;
  }
`

const Experience = () => {

return workItems.map( (item, index) => {
           return (
               <WorkItem>  
                 <div className="pencil">&#9999;</div>
                    <div className="flex">
                        <span className="title"> 
                           {item.title} 
                        </span> 
                        <span className="date">{item.date}</span>
                    </div>         
                    <a href={item.link}><div className="name">{item.name}</div></a>
                    <div className="description">{item.description}</div> 
               </WorkItem>
           )
        })
}

export default Experience

