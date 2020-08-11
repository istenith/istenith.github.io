import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FlexDiv = styled.div`
    margin-top: 5%;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
`

const BannerImage = styled(Image)`
    width: 100%;
    height: 250px;

    img{
      margin: 0;
    }
    @media only screen and (max-width: 786px){
        width: 100%;
        height: 200px;
    }
`

const Card = styled.div`
    display: flex;
    width: 30%;
    overflow: hidden;
    margin: 0 1% 2%;
    background-color: #2a2e35;
    border-radius: 10px;
    box-shadow: 0 20px 20px rgba(10,10,10,0.6);
    transition: 0.2s ease-out;


    .text{
      padding: 0 1rem 1rem;
    }
    .header{
        color:white;
        margin-top: 15px;
        .title{
            font-size: xx-large;
            font-weight: 400;
        }
    }

    .excerpt{
        color:white;
        margin-top: 15px;
        text-align: justify;
        max-height: 150px;
    }

    &:hover{
      transform: translateY(-2%);
      transition: 0.2s ease-out;
    }

    @media only screen and (max-width: 786px){
        width: 90%;
        margin: 0 5% 5%;
    } 

`

function Projects() {
  const list = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/.*projects/" } }
        sort: { fields: frontmatter___date, order: DESC}
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date (formatString: "MMMM Do, YYYY")
              featuredImage {
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
        {node.frontmatter.featuredImage && (
          <BannerImage
            fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
            alt="Banner Image"
          />
        )}
        <div className='text'>
          <div className="header">
            <div className="title">{node.frontmatter.title}</div>
            <div className="date">{node.frontmatter.date}</div>
          </div>
          <div className="excerpt">{node.excerpt}</div>
        </div>
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
