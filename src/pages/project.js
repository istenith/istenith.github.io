import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import style from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FlexDiv = style.div`
    margin-top: 5px;
    justify-items: center;
    display: flex;
    flex-wrap: wrap;
`

const Card = style.div`
    display: flex;
    flex-direction: column;

    .title{
        color:white;
    }

    .excerpt{
        color:white
    }
`

function Projects() {
  const list = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/.*projects/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
            excerpt(format: PLAIN)
          }
        }
      }
    }
  `)

  return list.allMarkdownRemark.edges.map(({ node }) => (
    <Link to={node.fields.slug} style={{ textDecoration: "none" }}>
      <Card>
        <div className="title">{node.frontmatter.title}</div>
        <div className="excerpt">{node.excerpt}</div>
      </Card>
    </Link>
  ))
}

const ProjectPage = () => (
  <Layout>
    <SEO title="Projects" />
    <center>
      <FlexDiv>
        <Projects></Projects>
      </FlexDiv>
    </center>
  </Layout>
)

export default ProjectPage
