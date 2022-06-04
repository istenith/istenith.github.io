import React from "react"
import { useStaticQuery, graphql } from "gatsby" // to query for image data
import Image from "gatsby-image" // to take image data and render it
import styled from "styled-components"
import Fade from 'react-reveal/Fade';
import { width } from "@mui/system";

const Marquee = styled.div`
    width:70%;
    margin-left:15%;
    overflow:hidden;
    /* border:1px solid #E05215; */
    border: 3px solid #260240;
    border-radius:10px;
    -webkit-box-shadow: 0px 4px 88px 0px rgba(0,0,0,0.99);
    -moz-box-shadow: 0px 4px 88px 0px rgba(0,0,0,0.99);
    box-shadow: 0px 4px 88px 0px rgba(0,0,0,0.99);
    @media screen and (max-width: 700px) {  
        width:90%;
        margin-left:5%;
    }
`

const GalImage = styled.div`
    padding:10px;
    display:flex;
    width:100%;
    // overflow:hidden;
    // overflow-x:scroll;
    position: relative;
    animation-name: marquee;
    animation-duration: 110s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes marquee {
        from {
            left: 20%;
        }
        to {
            left: -250%;
            transform: translateX(-100%);
        }
    }
`

const Img = styled(Image)`
    flex: none;
    margin-right:20px;
    // @keyframes moving0 {
    //     from {left:100%}
    //     to {left:-100%}
    // }
    // @keyframes moving1 {
    //     from {left:50%}
    //     to {left:-150%}
    // }
    // @keyframes moving2 {
    //     from {left:0%}
    //     to {left:-200%}
    // }
    // @keyframes moving3 {
    //     from {left:-20%}
    //     to {left:-220%}
    // }
    // @keyframes moving4 {
    //     from {left:0%}
    //     to {left:-600%}
    // }
    // @keyframes moving5 {
    //     from {left:0%}
    //     to {left:-700%}
    // }
    // @keyframes moving6 {
    //     from {left:100%}
    //     to {left:-600%}
    // }
`

export default function GalleryImage() {

    const data = useStaticQuery(graphql`
        query {
            allFile(
            filter: {
                extension: { regex: "/(jpg)|(png)|(jpeg)/" }
                relativeDirectory: { eq: "gallery_images" }
            }
            ) {
            edges {
                node {
                base
                childImageSharp {
                    fluid {
                    ...GatsbyImageSharpFluid
                    }
                }
                }
            }
            }
        }
    `)
    var custom_image_css = []
    for (var j = 0; j <= 6; j++) {
        var img_width = 0;
        var delay = 30;
        var margTop = Math.random() * 10;
        while (img_width < 30 || img_width > 70) {
            img_width = Math.random() * 100
        }
        // while(delay<30 || delay>60){
        //     delay = Math.random()*60
        // }

        var gal_css = {
            // width: '' + img_width + '%',
            // marginTop: '' + margTop + '%',
            // height: '100%',
            width:'60vh',
            animationName: 'moving' + j,
            animationDuration: '' + delay + 's',
            animationIterationCount: 'infinite',
        }
        custom_image_css.push(gal_css)
    }

    return (
        <Fade>
            <Marquee>
                <GalImage>
                    {data.allFile.edges.map((image, i) => (
                        <Img
                            fluid={image.node.childImageSharp.fluid}
                            alt={image.node.base.split(".")[0] + " " + i} // only use section of the file extension with the filename
                            style={custom_image_css[i]}
                        />
                    ))}
                </GalImage>
            </Marquee>
        </Fade>
    )
}


