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
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  padding: 2em;
  justify-items: color-interpolation-filters;
  ${"" /* margin-top:1vh; */}
  margin-bottom: 10vh;
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
      margin-bottom: 1em;
      text-align: center;
    }
  }

  .logo {
    grid-column-gap: 20px;
    grid-column: 2/3;
    color: #14a098;
    padding-left: 6rem;
    margin: 3em;
    transition: 0.5s ease-in-out;
  }
  .logo:hover {
    transition: 0.5s ease-in-out;
    transform: scale(1.1);
  }
  .Dev {
    color: white;
  }
  @media screen and (max-width: 1080px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
    margin-top: 1rem;
    margin-bottom: 7rem;
    .text {
      grid-row: 2/4;
      grid-column: 1/2;
      .name {
        font-size: 5rem;
      }
      .name,
      .team {
        text-align: center;
      }
    }
    .logo {
      grid-row: 1/2;
      grid-column: 1/2;
      left: 10px;
      padding-left: 1rem;
      text-align: center;
      .img {
        height: 200px;
        width: 200px;
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
      <div className="logo" 
        style={
          {
            textAlign:'center',
            position:'absolute',
            top:'40%',
            left:'50%',
            transform:'translate(-50%,-50%)',
          }
        }
      >
          <IsteLogo className="img" width="400px" height="400px" />
          <h2 style={{fontSize:'60px', color:'white', marginTop:'20px'}}>Website it under Development</h2>
      </div>
    </>
  )
}

// <div className='mainup'>
//         <SEO title='Home' />
//         <LandingDiv>
//           <div className='text'>
//             {/* <FontAwesomeIcon icon={fa} size='1x' /> */}
//             <h1 className='name'>ISTE NITH</h1>
//             <Tagline />
//           </div>
//           <div className='logo'>
//             <Tilt>
//               <IsteLogo className='img' width='300px' height='300px' />
//             </Tilt>
//           </div>
//         </LandingDiv>
//       </div>

//       <GalleryImage />
//       <Layout>
//         <div style={mystyle}>
//           {/* <div data-aos='zoom-in-up'> */}
//           <Carousel>
//             <PhotoCarousel />
//           </Carousel>
//           {/* </div> */}
//         </div>
//         <div>
//           <AboutUs />
//         </div>
//       </Layout>
//       <Footer />
