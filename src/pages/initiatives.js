import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
    color: white;
    background-color: #2a2e35;
    border-radius: 20px;
    padding: 1rem 2rem;
    margin: 2rem 0;
    box-shadow: 0 20px 20px rgba(10,10,10,0.6);

    .Title{
        margin: 0;
    }

    .FlexContainer{
        display: flex;

        .Image{
            flex: 1 0 200;
            width: 50%;
            margin: 2rem;
        }
    }

    @media screen and (max-width: 1080px){
        .FlexContainer{
            flex-direction: column;
            align-items: center;
        }
    }
`;

export default function Initiatives(){
    const list = useStaticQuery(graphql`
    query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/.*initiatives/"}}) {
            edges {
                node {
                    frontmatter {
                        title
                        featuredImage {
                            childImageSharp {
                                fluid{
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    html
                }
            }
        }
    }
    `)

    const data = list.allMarkdownRemark.edges
    console.log(data)

    return(
        <Layout>
            <SEO title="Members"/>
            {/* <h1 style={{color: 'white'}}>Our Initiatives</h1> */}
            {data.map(({node})=>(
                <Container>
                    <h1 className="Title">{node.frontmatter.title}</h1>
                    <div className="FlexContainer">
                        <div className='Image'>
                            <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid}/>
                        </div>
                        <div dangerouslySetInnerHTML={{__html: node.html}}></div>
                    </div>
                </Container>
            ))}
        </Layout>
    )
}