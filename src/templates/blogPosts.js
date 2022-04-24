import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "../components/layout"
import { devices, SingleColumn, SingleColumnMain } from "../components/base"
import styled from "styled-components"

const ProjectItem = styled.div`
    max-width: 900px;
    padding: 3rem 1rem;
    white-space: pre-wrap;
  .flex{
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      align-items: flex-end;
  }
  .title {
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
  .body{
    font-size: 1rem;
    line-height: 1.8rem;
    max-width: 100vw;
  --slnt: "slnt" 0;
  --wght: "wght" 200;
  --mono: "MONO" 1;
    pre {
        white-space: pre-wrap;
        word-break: break-all;
        font-size: 0.9rem;
        code {
        display: block;
        max-width: 100vw;
        background-color: #d3d3d3;
        padding: 0 0.3rem;
        }
    }
    p code {
        background-color: #d3d3d3;
        padding: 0 0.3rem;
    }
    em {
        --slnt: "slnt" -11;
        --CRSV: "CRSV" 1;
    }
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
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "Do MMMM YYYY ")
      }
    }
  }
`;

const blogPosts = ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  console.log(data.mdx.html);
  return (
    <Layout>
    <SingleColumnMain>
      <ProjectItem> 
      <h1 className="title">{frontmatter.title}</h1>
      <p className="post-date">{frontmatter.date}</p>
        <div className="flex">
            <article className="body">
                <MDXRenderer>{body}</MDXRenderer>
            </article>
        </div>


      {previous === false ? null : (
        <>
          {previous && (
            <Link to={previous.fields.slug}>
              <button className="previous-next-button">
                {previous.frontmatter.title}
              </button>
            </Link>
          )}
        </>
      )}
      {next === false ? null : (
        <>
          {next && (
            <Link to={next.fields.slug}>
              <button className="previous-next-button">
                {next.frontmatter.title}
              </button>
            </Link>
          )}
        </>
      )}
    </ProjectItem>
    </SingleColumnMain>
  </Layout>
  );
};
export default blogPosts;


