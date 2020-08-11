import React, { useState } from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import {ReactComponent as LeftArrow} from "../images/left-arrow.svg"
import {ReactComponent as RightArrow} from "../images/right-arrow.svg"


const SliderDiv =  styled.div`
    width: 90%;
    margin: 10px auto;
    overflow: hidden;
    .Carousel{
        /* border: 2px solid #ccc; */
        height: 400px;
        position: relative;

        .controls .arrow{
            position: absolute;
            top: 50%;
            cursor: pointer;
        }
        .arrow.left{
            left: 10px;
        }
        .arrow.right{
            right: 10px;
        }
    }
`;

const Slider = styled.div`
    height: 100%;
    display: flex;
    width: ${({numSlides, slide})=> (numSlides)*100+'%'};
    transform: ${({numSlides, slide})=> 'translateX(-'+slide*(100/numSlides)+'%)'};
    transition: transform 0.5s ease-out 0.5s;
    section{
        color: white;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .Container{
            padding: 1rem 3rem;
        }
    }

    @media screen and (max-width: 800px){
        section{
            margin-top: 3rem;
        }
    }
`;

export default function Initiatives(){
    const [slide, setSlide] = useState(0)
    const [auto, setAuto] = useState(true)
    const data = useStaticQuery(
    graphql`
        query{
            allFile(filter: {relativeDirectory: {eq: "initiatives"}, ext: {eq: ".jpg"}}) {
            edges {
                node {
                childImageSharp {
                    fixed {
                        ...GatsbyImageSharpFixed
                    }
                }
                }
            }
            }
        } 
    `
    )

    const numSlides = data.allFile.edges.length

    if (auto)
        setTimeout(()=>{autoSlide()},5000);

    function autoSlide(){
        if(auto){
            (slide+1 >= numSlides) ? setSlide(0) : setSlide(slide+1)
        }
    }
    function nextSlide(e){
        if(auto){
            setAuto(!auto)
        }
        (slide+1 >= numSlides) ? setSlide(0) : setSlide(slide+1)
    }
    function prevSlide(e){
        if(auto){
            setAuto(!auto)
        }
        (slide-1 < 0) ? setSlide(numSlides-1) : setSlide(slide-1)
    }

    return (
        <SliderDiv>
        <div className='Carousel'>
            <Slider className='Slider' numSlides={numSlides} slide={slide}>
                {data.allFile.edges.map(({node})=>(
                    <section>
                        <div className='Container'>
                            <Img fixed={node.childImageSharp.fixed}/>
                        </div>
                    </section>
                ))}
            </Slider>
            <div className='controls'>
                <span className='arrow left' onClick={(prevSlide)}><LeftArrow fill='white' height='20px' width='20px'/></span>
                <span className='arrow right' onClick={nextSlide}><RightArrow fill='white' height='20px' width='20px'/></span>
            </div>
        </div>
        </SliderDiv>
    )   
}