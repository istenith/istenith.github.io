import React, { useEffect, useState } from "react"
import styled from "styled-components"
// import ReactAnime from 'react-animejs'
// import Zoom from 'react-reveal/Zoom';
// import Flip from 'react-reveal/Flip';
import "aos/dist/aos.css"
import Aos from "aos"
import Layout from "../components/layout"
// import Projects from '../components/projects'
import PhotoCarousel from "../components/carousel"
import AboutUs from "../components/about"
import SEO from "../components/seo"
// import UpcomingEvent from '../components/upcoming_event'
import { ReactComponent as IsteLogo } from "../images/iste_logo_hollow.svg"
import Tagline from "../components/tagline"
import Footer from "../components/footer"
import GalleryImage from "./gallery"
import Tilt from "react-parallax-tilt"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const mainup = styled.div`
  background: #14a098;
  margin: 8rem 10rem 0;
  flex: 1 0 auto;

  @media screen and (max-width: 780px) {
    margin: 8rem 5rem 0;
  }
  @media screen and (max-width: 590px) {
    margin: 5rem 1rem 0;
  }
`
const LandingDiv = styled.div`
  padding: 2em;
  ${"" /* margin-top:1vh; */}
  margin-bottom: 10vh;
  margin-top: 10vh;
  .text {
    margin: auto;
    color: white;
    grid-column: 2/3;
    grid-row: 2/3;
    font: Roboto;
    .name {
      display: flex;
      justify-content: center;
      margin: auto;
      font-style: normal;
      font-weight: normal;
      font-size: 5rem;
      color: white;
      margin-top: 4vh;
      text-align: center;
    }
  }

  .logo {
    text-align: center;
    width: max-content;
    margin: auto;
    color: #14a098;
    transition: 0.5s ease-in-out;
  }
  .logo:hover {
    transition: 0.5s ease-in-out;
    transform: scale(1.1);
  }
  .Dev {
    color: white;
  }
  @media screen and (max-width: 700px) {
    .text {
      .name {
        font-size: 4rem !important;
        margin-bottom: 4rem;
      }
      .name,
      .team {
        text-align: center;
      }
    }
    .logo {
      text-align: center;
      .img {
        height: 200px !important;
        width: 200px !important;
      }
    }
  }
  @media screen and (max-width: 1080px) {
    .text {
      .name {
        font-size: 5rem;
      }
      .name,
      .team {
        text-align: center;
      }
    }
    .logo {
      text-align: center;
      .img {
        height: 300px;
        width: 300px;
      }
    }
  }
`

const mystyle = {
  //   backgroundColor: "#c96567",
  //   padding: "10px",
  // margin: 0,
  // paddingtop: "2em",
  // width:"120%",
  // left: "-20%",
  // position: "absolute",
  // zIndex: "2"
}
const Carousel = styled.div`
  .carousel {
    margin-top: 30px;
  }
`
export default function IndexPage() {
  var ml4 = {}
  ml4.opacityIn = [0, 1]
  ml4.scaleIn = [0.2, 1]
  ml4.scaleOut = 3
  ml4.durationIn = 800
  ml4.durationOut = 600
  ml4.delay = 500

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
    {/* replace from div code with below code I have commented to remove from under development status */}
      <div
        className="logo"
        style={{
          textAlign: "center",
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <IsteLogo className="img" width="400px" height="400px" />
        <h2 style={{ fontSize: "60px", color: "white", marginTop: "20px" }}>
          Website it under Development
        </h2>
      </div>
    </>
  )
}

{
  /* <div className='mainup'>
<SEO title='Home' />
<LandingDiv>
  <div className='logo'>
    <Tilt>
      <IsteLogo className='img' width='300px' height='300px' />
    </Tilt>
  </div>
  <div className='text'>
    <h1 className='name'>ISTE NITH</h1>
    <Tagline />
  </div>
</LandingDiv>
</div>

<GalleryImage />
<Layout>
<div style={mystyle}>
  <Carousel>
    <PhotoCarousel />
  </Carousel>
</div>
<div>
  <AboutUs />
</div>
</Layout>
<Footer /> */
}
