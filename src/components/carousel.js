import React from "react"
// import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
// import { Link } from "gatsby"
import Img from "gatsby-image"
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

// const Slider = styled.div`
//     @media screen and (max-width: 800px){
//         section{
//             margin-top: 3rem;

//             .Container{
//                 padding: 1rem 0;
//             }
//         }
//     }
// `;

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
