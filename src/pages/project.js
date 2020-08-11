import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
import style from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FlexDiv = style.div`
    margin-top: 5%;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
`

const BannerImage = style(Image)`
    border-radius: 10px;
    width: 100%;
    height: 250px;

    @media only screen and (max-width: 786px){
        width: 100%;
        height: 200px;
    }
`

const Card = style.div`
    display: flex;
    width: 30%;
    overflow: hidden;
    margin: 0 1% 2%;
    background-color: #101010;
    padding: 20px;
    border: 2px solid rgba(230,225,230,0.8);
    border-radius: 20px;
    box-shadow: 0 20px 20px rgba(10,10,10,0.6);

    .title{
        color:white;
        margin-top: 15px;
        font-size: xx-large;
        font-weight: 400;
    }

    .excerpt{
        color:white;
        margin-top: 15px;
        text-align: justify;
        max-height: 150px;
    }

    @media only screen and (max-width: 786px){
        width: 90%;
        margin: 0 5% 5%;
        padding: 5%;
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
              banner {
                  childImageSharp {
                      fluid {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
            }
            excerpt(format: PLAIN)
          }
        }
      }
    }
  `)

  return list.allMarkdownRemark.edges.map(({ node }) => (
    <Card>
      <Link to={node.fields.slug} style={{ textDecoration: "none" }}>
      {node.frontmatter.banner && (
        <BannerImage
          fluid={node.frontmatter.banner.childImageSharp.fluid}
          alt="Banner Image"
        />
      )}
        <div className="title">{node.frontmatter.title}</div>
        <div className="excerpt">{node.excerpt}</div>
      </Link>
    </Card>
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
