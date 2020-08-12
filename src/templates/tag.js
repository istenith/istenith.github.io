import React from "react"
import Layout from '../components/layout'
import SEO from "../components/seo"
import styled from 'styled-components'
import Card from "../components/card"


// Components
import { Link, graphql } from "gatsby"

const PageTitle= styled.h1`
  color: white;
`;

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
            const excerpt = node.excerpt;
            return (
              <Card frontmatter={node.frontmatter} slug={slug} excerpt={excerpt}/>
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