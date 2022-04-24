import React from "react"
import styled from "styled-components"
import { devices  } from "./base"
import { useStaticQuery, graphql } from "gatsby"
import { StyledLink } from "./base"
import { navigate } from 'gatsby';  


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
    font-size: 1rem;
    margin-bottom: 1rem;
  --slnt: "slnt" 0;
  --wght: "wght" 400;
  --mono: "MONO" 1;
  @media ${devices.tablet} {
    font-size: 1.5rem;
  }
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
    font-size: 1rem;
  --slnt: "slnt" -9;
  --wght: "wght" 360;
  --mono: "MONO" 1;
  }
`

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          date(formatString: "Do MMMM YYYY")
          title
          description
        }
        excerpt
        slug
      }
    }
  }
`
const BlogPosts = () => {
  const data = useStaticQuery(query)
  const posts = data.allMdx.nodes
  // console.log(posts)
  return posts.map( (item) => {
        return (
            <ProjectItem key={item.slug}>  
                <StyledLink to={`../${item.slug}`}> <div className="name">{item.frontmatter.title}</div> </StyledLink>
                <div>{item.frontmatter.date}</div>
                <div className="flex"><span className="description">{item.frontmatter.description}</span></div>         
            </ProjectItem>
        )
    })
  }

export default BlogPosts

