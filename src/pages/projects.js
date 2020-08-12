import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import kebabCase from "lodash/kebabCase"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Search = styled.input`
  background: #e84118;
  opacity: 0.7;
  padding: 0 2rem;
  width: 50%;
  height: 50px;
  border-radius: 50px;
  box-shadow: 0 -3px 50px black;
  border: none;
  color: white;
  font-family: Roboto;
  transition : 0.2s ease-in;
  box-shadow: inset 0.2rem 0px 0.3rem black;
  &:focus{
    opacity: 1;
    box-shadow: none;
    transition : 0.2s ease-in;
  }

  @media screen and (max-width: 1080px){
    width: 90%;
  }
`;

const FlexDiv = styled.div`
    margin-top: 5%;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    position: relative;
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

    flex: 0 0 300px;

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

    .tags{
      color:white;
      display: flex;
      .tag{
          background-image:linear-gradient(0deg,#ff8a00,#e52e71);
          border-radius: 20px;
          margin: 5px;
          padding: 0 4px;
          min-width: 50px;
          text-align: center;
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

function Projects({ posts }) {
  return posts.map(({ node }) => (
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
          <div className='tags'>{node.frontmatter.tags.map((tag) => (
            <Link to={'/tags/' + kebabCase(tag)} style={{ textDecoration: "none", color: 'white' }}>
              <div className='tag'>{tag}</div>
            </Link>
          ))}</div>
        </div>
      </Link>
    </Card>
  ))
}

const ProjectPage = () => {
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
              tags
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

  const posts = list.allMarkdownRemark.edges;

  const emptyQuery = ""
  const [state, setState] = useState({
    filteredData: posts,
    query: emptyQuery,
  })

  const handleInputChange = event => {
    const query = event.target.value
    const data = list
    const posts = data.allMarkdownRemark.edges || []
    const filteredData = posts.filter(post => {
      const {title, tags } = post.node.frontmatter
      const excerpt = post.node.excerpt;
      return (
        excerpt.toLowerCase().includes(query.toLowerCase())||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags && tags
          .join("") 
          .toLowerCase()
          .includes(query.toLowerCase()))
      )
    })
    
    setState({
      query,
      filteredData,
    })
  }

  return (
  <Layout>
    <SEO title="Projects" />
    <center>
      <Search
        type="text"
        aria-label="Search"
        placeholder="Type to filter posts..."
        onChange={handleInputChange}
      />
      <FlexDiv>
        <Projects posts={state.filteredData}></Projects>
      </FlexDiv>
    </center>
  </Layout>)
}

export default ProjectPage
