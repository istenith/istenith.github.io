import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

const Upcoming = styled.div`
    color: white;
    background-color: #238636;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    margin: 2rem 0 4rem 0;
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

        h2{
            color: white;
            margin: 1rem 0;
        }
        .desc{
            color: white;
            margin-top: 1rem;
            display:flex;
            flex-wrap: wrap;
            align-items:center;
            p{
                margin-bottom: 0;
                text-align: justify;
                justify-content:center;
                a{
                    color: #0f0f0f;
                }
            }
        }
    }

    @media only screen and (max-width: 680px){
        width: 90%;
        margin: 0.2rem 5% 3rem;

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

export default function UpcomingEvent(){
    const data = useStaticQuery(
        graphql`
          query {
            file(absolutePath: {regex: "/.*upcoming/"}) {
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

    if(data.file != null){
        const title = data.file.childMarkdownRemark.frontmatter.title
        const html = data.file.childMarkdownRemark.html
        return (
                <Upcoming id='upcoming_events'>
                    <center><h1>Upcoming Event</h1></center>
                    <div className = 'content'>
            {   data.file.childMarkdownRemark.frontmatter.featuredImage &&
                <div className='Image'>
                <Img fluid={data.file.childMarkdownRemark.frontmatter.featuredImage.childImageSharp.fluid} style={{borderRadius:"5%"}}/>
                </div>
            }
                        <div>
                            <h2>{title}</h2>
                            <div className='desc' dangerouslySetInnerHTML={{__html: html}}></div>
                        </div>
                   </div>
                </Upcoming> 
        )
    }else{
        return null
    }
}
