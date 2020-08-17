import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import { faSalesforce } from "@fortawesome/free-brands-svg-icons"

const About = styled.div`
    color: white;
    background-color: #2a2e35;
    border-radius: 30px;
    padding: 2.5rem 2rem;
    margin: 2rem 0;
    box-shadow: 0 20px 20px rgba(10,10,10,0.6);
    @media(max-width:411px){
        margin:1rem;
    }
    
    h1{
        color: white;
        margin: 0;
        padding:0 2rem;
        font-size:2rem;
        @media(max-width:411px){
            padding:0;
        }
    }

    .content{
        display: flex;
        align-items: center;
        @media(max-width:411px){
            flex-direction: column;
        }
        @media(max-width:768px){
            flex-direction: column;
        }
        @media(max-width:1024px){
            flex-direction: column;
        }
        .Image{
            flex: 1 0 200;
            width: 150%;
            margin: 2rem;
            @media(max-width:411px){
                width 100%;
            }
            @media(max-width:768px){
                width 90%;
            }
            @media(max-width:1024px){
                width 90%;
            }
            
            box-shadow: 0 10px 10px rgba(10,10,10,0.6);
            
        }
        .desc{
            color: white;
            margin:1rem 0;
            p{
                margin-bottom: 0;
                font-size:1.2rem;
                margin:0 2rem;
                
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
    `
    )

    console.log(data)

    const title = data.file.childMarkdownRemark.frontmatter.title
    const html = data.file.childMarkdownRemark.html
    const fluid = data.file.childMarkdownRemark.frontmatter.featuredImage.childImageSharp.fluid
    return (
           <About id='about' >
               <h1>{title}</h1>
               <div className = 'content'>
                    <div className='Image'>
                        <Img fluid={fluid}/>
                    </div>
                   <div className='desc' dangerouslySetInnerHTML={{__html: html}}></div>
               </div>
           </About> 
    )
}