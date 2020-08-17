import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
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
        margin: 0;
    }

    .content{
        .desc{
            color: white;
            p{
                margin-bottom: 0;
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
    return (
           <About id='about'>
               <h1>{title}</h1>
               <div className = 'content'>
                   <div className='desc' dangerouslySetInnerHTML={{__html: html}}></div>
               </div>
           </About> 
    )
}