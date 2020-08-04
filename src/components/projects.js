import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Projects (){
    const data = useStaticQuery(
    graphql`
        query{
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/.*projects/"}}) {
            edges {
                node {
                fields {
                    slug
                }
                frontmatter {
                    title
                    date
                }
                }
            }
            }
        } 
    `
    )
    
    return (
    <div>
    <ol>
    {
        data.allMarkdownRemark.edges.map( ({node})=> (
        <li>
            <Link to={node.fields.slug} style={{textDecoration: 'none'}}>
                <h3>{node.frontmatter.title}</h3>
                <p>{node.frontmatter.date}</p>
            </Link>            
        </li>
        ))
    }
    </ol>
    </div>
    )
}