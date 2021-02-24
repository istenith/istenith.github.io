import React from "react";
import styled from "styled-components";
import ReactAnime from "react-animejs";

import Layout from "../components/layout";
import Projects from "../components/projects";
import PhotoCarousel from "../components/carousel";
import AboutUs from "../components/about";
import SEO from "../components/seo";
import UpcomingEvent from "../components/upcoming_event";
import { ReactComponent as IsteLogo } from "../images/iste_logo_hollow.svg";
import Tagline from "../components/tagline";

const LandingDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: color-interpolation-filters;

  margin-top: 10vh;
  margin-bottom: 10vh;
  .text {
    color: white;
    grid-column: 1/3;
    font: Roboto;
    .name {
      font-style: normal;
      font-weight: normal;
      font-size: 7rem;
      color: white;
      text-align: start;
    }
  }

  .logo {
    grid-column-gap: 30px;
    grid-column: 3/4;
    padding-left: 5rem;
  }

  @media screen and (max-width: 1080px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
    margin-top: 4rem;
    margin-bottom: 7rem;
    .text {
      grid-row: 2/4;
      grid-column: 1/2;
      .name {
        font-size: 7rem;
      }
      .name,
      .team {
        text-align: center;
      }
    }
    .logo {
      grid-row: 1/2;
      grid-column: 1/2;
      padding-left: 0rem;
      text-align: center;
      .img {
        height: 200px;
        width: 200px;
      }
    }
  }
`;

export default function IndexPage() {
  var ml4 = {};
  ml4.opacityIn = [0, 1];
  ml4.scaleIn = [0.2, 1];
  ml4.scaleOut = 3;
  ml4.durationIn = 800;
  ml4.durationOut = 600;
  ml4.delay = 500;

  return (
    <Layout>
      <SEO title="Home" />
      <LandingDiv>
        <div className="text">
          <h1 className="name"> ISTE NITH </h1> <Tagline />
        </div>{" "}
        <div className="logo">
          <IsteLogo className="img" width="300px" height="300px" />
        </div>{" "}
      </LandingDiv>{" "}
      {/*<UpcomingEvent />*/}
      <PhotoCarousel />
      <Projects />
      <AboutUs />
    </Layout>
  );
}
