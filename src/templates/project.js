import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import SEO from "../components/seo"


export default function Project ({ data }) {
    const project = data.markdownRemark
    return (
        <Layout>
            <SEO title={project.frontmatter.title}/>
            <h1>{project.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: project.html }}></div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String){
        markdownRemark(fields: { slug: { eq: $slug }}){
            html
            frontmatter{
                title
                date
            }
        }
    }
`