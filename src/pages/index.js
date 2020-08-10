import React from "react"
import { Link, graphql } from "gatsby"
import styled, { withTheme } from 'styled-components'
import ReactAnime from 'react-animejs'

import Layout from "../components/layout"
import Projects from "../components/projects"
import Initiatives from '../components/initiatives'
import SEO from "../components/seo"
import {ReactComponent as IsteLogo} from "../images/iste_logo_hollow.svg"
import styles from "../styles/global-styles.scss"
const LandingDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items:color-interpolation-filters;

  margin-top:20vh;
  margin-bottom: 10vh;
  .text{
    color: white;
    grid-column: 1/3;
    font: Roboto;
    .name{
      font-style: normal;
      font-weight: normal;
      color: #111717;
      font-size:10rem;
      text-align:start;
      position:relative;
      -webkit-text-stroke: 2px #fff;
      
      &:hover {
        color: #fff;
        font-style: normal;
        font-weight: normal;
        color: white;
        font-size:10rem;
        text-align:start;
				-webkit-text-stroke: 1px #000;
        transition: 0.5s;
        text-shadow: 0 0 5px #fff, 0 0 10px #fff,;
        
				&::before {
					color: red;
					z-index: 1;
					-webkit-text-stroke: 0.5px #000;
          transform: translate(7px,-7px);
          
				}
				&:after {
					color: #0ff;
					z-index: 2;
					-webkit-text-stroke: 0.5px #000;
					transform: translate(14px,-14px);
				}
			}
			&:before {
				content: attr(data-text);
				position: absolute;
        top: 0;
        bottom:0;
        left: 0;
        right:0;
        transition: 0.5s;
        
        
			}
			&:after {
				content: attr(data-text);
				position: absolute;
        top: 0;
        bottom:0;
				left: 0;
        transition: 0.5s;
        
			}

    }
    .TagLine{
      display: flex;
      .team, .AnimationContainer{
      font-style: normal;
      font-weight: normal;
      color:#34cc1f;
      font-size: 3rem;
      text-align: start;
    }
    #Team, #Society, #Organisation, #Family {
        position: absolute;
        padding-left: 1rem;
      }
    }
  }

  .logo{
    grid-column-gap:30px;
    grid-column: 3/4;
    padding-left: 5rem;
  }

  @media screen and (max-width: 1080px){
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
    margin-top: 4rem;
    margin-bottom: 7rem;
    .text{
      
      grid-row: 2/4;
      grid-column: 1/2;
      .name{
        font-size: 8rem;
      }
      .name,.team{
        text-align:center;
      }

      .TagLine{
        display: block;
        .team{
          text-align:center;
        }
        .AnimationContainer{
          font-size: 7vh;
          #Team, #Society, #Organisation, #Family {
            z-index: -10000;
            position: absolute;
            text-align: center;
            padding-left: 0;
            width: 100%;
          }
        }
      }
    }
    .logo{
      grid-row: 1/2;
      grid-column: 1/2;
      padding-left: 0rem;
      text-align:center;
      .img{
        height: 200px;
        width: 200px;
      }
      
    }
  }
`;
const { Anime, stagger } = ReactAnime

export default function IndexPage (){
  var ml4 = {};
  ml4.opacityIn = [0,1];
  ml4.scaleIn = [0.2, 1];
  ml4.scaleOut = 3;
  ml4.durationIn = 800;
  ml4.durationOut = 600;
  ml4.delay = 500;

  return (
    <Layout>
    <SEO title="Home" />
    <LandingDiv>
      <div className='text'>
        <h1 className='name' data-text="ISTE NITH">ISTE NITH</h1>
        <Anime 
          animeConfig={{
            // autoplay: false,
            duration: 1500,
            easing: "easeInOutSine",
            loop: true
          }}
          initial={[
            {
              targets: "#Team",
              opacity: ml4.opacityIn,
              // scale: ml4.scaleIn,
              duration: ml4.durationIn,
            },
            {
              targets: "#Team",
              opacity: 0,
              // scale: ml4.scaleOut,
              duration: ml4.durationOut,
              easing: "easeInExpo",
            },
            {
              targets: "#Society",
              opacity: ml4.opacityIn,
              // scale: ml4.scaleIn,
              duration: ml4.durationIn,
            },
            {
              targets: "#Society",
              opacity: 0,
              // scale: ml4.scaleOut,
              duration: ml4.durationOut,
              easing: "easeInExpo",
            },
            {
              targets: "#Organisation",
              opacity: ml4.opacityIn,
              // scale: ml4.scaleIn,
              duration: ml4.durationIn,
            },
            {
              targets: "#Organisation",
              opacity: 0,
              // scale: ml4.scaleOut,
              duration: ml4.durationOut,
              easing: "easeInExpo",
            },
            {
              targets: "#Family",
              opacity: ml4.opacityIn,
              // scale: ml4.scaleIn,
              duration: ml4.durationIn,
            },
            {
              targets: "#Family",
              opacity: 0,
              // scale: ml4.scaleOut,
              duration: ml4.durationOut,
              easing: "easeInExpo",
            },
          ]}
        >
        <div className='TagLine'>
          <h3 className='team'>WE ARE A</h3>
          <h3 className='AnimationContainer'>
          {/* <span className="AnimationContainer"> */}
            <span id="Team">TEAM</span>
            <span id="Society">SOCIETY</span>
            <span id="Organisation">ORGANISATION</span>
            <span id="Family">FAMILY</span>
          {/* </span> */}
          </h3>
        </div>
        </Anime>
      </div>
      <div className='logo'>
        <IsteLogo className='img' width='300px' height='300px'/>
      </div>
    </LandingDiv>
    <Initiatives/>
    <Projects/>
    <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  )
}