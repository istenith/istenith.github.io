import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import {Link} from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"


const AboutFlex=styled.div`
display:flex;
margin 40px 0;
padding:2rem
.inner-about{
    .content{
        h3{
            color:#ffb4b4;
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
            teamimg: file(relativePath: { eq: "teamSrijan.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
        }
      `
    )


    return(
        
            <div className="container">
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
                        <Img fluid={data.teamimg.childImageSharp.fluid} />
                    </div>
                    
                </div>
                </AboutFlex>
            ))}
            </div>
        
        )

}

export default About