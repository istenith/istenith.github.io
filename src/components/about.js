import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

const About = styled.div`
    color: white;
    background-color: #2a2e35;
    border-radius: 20px;
    padding: 1rem 2rem;
    margin: 2rem 0;
    box-shadow: 0 20px 20px rgba(10,10,10,0.6);
    h1{
        color: white;
        margin: 1rem 0;
    }

    .content{
        display: flex;
        flex-direction: row;
        justify-content: center;
        .Image{
            flex: 1 0 200;
            width: 100%;
            margin: 1rem 1rem 0;
        }
        .desc{
            color: white;
            margin-top: 1rem;
            display:flex;
            align-items:center;
            p{
                margin-bottom: 0;
                text-align: justify;
                justify-content:center;
            }
        }
    }

    @media only screen and (max-width: 680px){
        width: 90%;
        margin: 2rem 5% 5%;

        h1{
            color: white;
            margin: 0.5rem 0;
        }
        .content{
            display: flex;
            justify-content: center;
            flex-direction: column;
            .Image{
                margin: 2rem 0 0;
                width: 100%;
            }
            .desc{
                margin-top: 0;
            }
        }
    }
`;

export default function AboutUs(){
    const data = useStaticQuery(
        graphql`
          query {
            file(absolutePath: {regex: "/.*about/"}) {
                childMarkdownRemark {
                  frontmatter {
                    title
                    featuredImage{
                        childImageSharp {
                            fluid(maxWidth: 1000){
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                  }
                  html
                }
              }
        }
    `
    )

    console.log(data)

    const title = data.file.childMarkdownRemark.frontmatter.title
    const html = data.file.childMarkdownRemark.html
    const fluid = data.file.childMarkdownRemark.frontmatter.featuredImage.childImageSharp.fluid
    return (
           <About id='about'>
               <div className = 'content'>
                    <div className='Image'>
                        <Img fluid={fluid} style={{borderRadius:"5%"}}/>
                    </div>
                    <div>
                       <h1>{title}</h1>
                       <div className='desc' dangerouslySetInnerHTML={{__html: html}}></div>
                    </div>
               </div>
           </About> 
    )
}
