import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Projects from "../components/projects"
import SEO from "../components/seo"

export default function IndexPage ({data}){
  console.log(data)
  return (
    <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new ISTENITH website.</p>
    <p>Now go build something great.</p>
    <Projects></Projects>
    <h1>About Us</h1>
    <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }}></div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  )
}

export const data = graphql`
query{
  allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/.*about.md/"}}) {
    edges {
      node {
        fileAbsolutePath
        frontmatter {
          date
          title
        }
        rawMarkdownBody
        html
      }
    }
  }
}
`