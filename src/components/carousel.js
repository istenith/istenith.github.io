import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function PhotoCarousel(){
    const data = useStaticQuery(
    graphql`
        query{
            allFile(filter: {relativeDirectory: {eq: "carousel"}, ext: {eq: ".png"}}) {
            edges {
                node {
                childImageSharp {
                    fixed{
                        ...GatsbyImageSharpFixed
                    }
                }
                }
            }
            }
        } 
    `
    )
    return (
        <Carousel autoPlay>
            {data.allFile.edges.map(({node})=>(
                <div>
                    <Img fixed={node.childImageSharp.fixed}/>
                </div>
            ))}
        </Carousel>
    )   
}
