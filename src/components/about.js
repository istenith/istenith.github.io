import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import {Link} from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"


const AboutFlex=styled.div`
display:flex;
margin:20rem 0;
padding:30px ;
padding-top:20%;


.inner-about{
    .content{
        h3{
            color:#fffff;
            font-weight:700;
            font-size:5rem;
            @media(max-width:411px){
              font-size:4rem;
            }
            @media(max-width:768px){
              display:inline;
              font-size:5rem;
              padding-top:10%
            }
        }
        p{
          font-size:1.5rem;
          @media(max-width:411px){
            font-size:1.2rem
          }
          @media(max-width:768px){
            margin:4rem 0;
            font-size:1.7rem;
          }
        }
    }
}

`

const Heading=styled.h3`
color:white;`

const Para=styled.p`
color:white;`

const About = ()=> {
    const data = useStaticQuery(
      graphql`
        query {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/.*about/"}}) {
                edges {
                  node {
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                    }
                    excerpt(format: PLAIN, pruneLength: 500)
                  }
                }
            }
            
            
        }
      `
    )


    return(
        
            <div className="container" id="about">
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <AboutFlex>
                <div className="inner-about">
                    <div className="content">
                        <Heading>
                        <h3>About Team ISTE</h3>
                        </Heading>
                        <Para>
                        <p>{node.excerpt}</p>
                        </Para>
                        
                    </div>
                    
                </div>
                </AboutFlex>
            ))}
            </div>
        
        )

}

export default About