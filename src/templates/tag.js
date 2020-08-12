import React from "react"
import Layout from '../components/layout'
import SEO from "../components/seo"
import styled from 'styled-components'
import kebabCase from "lodash/kebabCase"
import Image from "gatsby-image"

// Components
import { Link, graphql } from "gatsby"

const PageTitle= styled.h1`
  color: white;
`;

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

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <SEO title={tag}/>
      <div>
        <PageTitle>{tagHeader}</PageTitle>
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title, date, tags, featuredImage } = node.frontmatter
            const excerpt = node.excerpt;
            return (
              <Card>
                <Link to={slug} style={{ textDecoration: "none" }}>
                  {node.frontmatter.featuredImage && (
                    <BannerImage
                      fluid={featuredImage.childImageSharp.fluid}
                      alt="Banner Image"
                    />
                    )}
                    <div className='text'>
                      <div className="header">
                        <div className="title">{title}</div>
                        <div className="date">{date}</div>
                      </div>
                      <div className="excerpt">{excerpt}</div>
                      <div className='tags'>{tags.map((tag)=>(
                      <Link to={'/tags/'+kebabCase(tag)} style={{ textDecoration: "none", color: 'white'}}>
                        <div className='tag'>{tag}</div>
                      </Link>
                      ))}</div>
                  </div>
                </Link>
            </Card>
            )
          })}
      </div>
    </Layout>
    
      
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
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
`