import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

const Heading = styled.h1`
    color: white;
    text-align:center;
    margin: 1rem 0;
`;

const Card = styled.div`
    display: flex;
    flex-direction:column;
    box-shadow: 0 20px 20px rgba(10,10,10,0.6);
    border-radius: 20px;
    max-height: 600px;
    overflow-y: auto; 
    background-color: #238636;
    flex:1;
    flex-basis: auto;
    justify-content: flex-start;
    margin: 1rem;
    padding: 1rem;
    h2{
        color: white;
        text-align: center;
    }
    .Image{
        margin-bottom: 2em;
    }
    .text{
        a{
            color: white;
            font-weight: bold;
            text-decoration: underline;
        }
    }
`;

const Upcoming = styled.div`
    color: white;
    margin: 2rem 0 4rem 0;
    display: flex;

    @media screen and (max-width: 1300px){
        flex-direction:column;
    }
`;

export default function UpcomingEvent(){
      const list = useStaticQuery(graphql`
        query {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/.*upcoming/" } }
            sort: {fields: frontmatter___date, order: DESC}
          ) {
            edges {
              node {
                frontmatter {
                  title
                  featuredImage {
                    childImageSharp {
                      fluid {
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

    if(list.allMarkdownRemark.edges.length !== 0){
        return (
            <>
            <Heading>Upcoming Events</Heading>
                <Upcoming>
                {list.allMarkdownRemark.edges.map(({node})=>
                    <Card>
                    {
                        node.frontmatter.featuredImage &&
                        <>
                            <h2>{node.frontmatter.title}</h2>
                            <div className='Image'>
                            <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} style={{borderRadius:"5%"}}/>
                            </div>
                            <div className="text">
                                <div className='desc' dangerouslySetInnerHTML={{__html: node.html}}></div>
                            </div>
                        </>
                    }
                    </Card>
                )
                }
                </Upcoming> 
            </>
        )
    }else{
        return null
    }
}
