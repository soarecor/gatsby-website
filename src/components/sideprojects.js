import React from "react"
import styled from "styled-components"
import {projectItems} from "../content/content"


const ProjectItem = styled.div`
    max-width: 900px;
    padding: 3rem 1rem;
  .flex{
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      align-items: flex-end;
  }
  .name {
    color: var(--fontSecondary);
    font-size: 2rem;
    margin-bottom: 1rem;
  --slnt: "slnt" 0;
  --wght: "wght" 400;
  --mono: "MONO" 1;
  }
  .role{
    font-size: 1rem;
    line-height: 1.8rem;
  --slnt: "slnt" 0;
  --wght: "wght" 200;
  --mono: "MONO" 1;
  }
  .description {
    line-height: 1.5rem;
    margin-bottom: 1.5rem;
  --slnt: "slnt" -9;
  --wght: "wght" 360;
  --mono: "MONO" 1;
  }
`

const SideProjects = () => {

return projectItems.map( (item, index) => {
           return (
               <ProjectItem>  
                    <a href={item.link}> <div className="name">{item.name}</div></a>
                    <div className="flex"><span className="description">{item.description}</span></div>         
                    <div className="role">{item.role}</div> 
               </ProjectItem>
           )
        })
}

export default SideProjects

