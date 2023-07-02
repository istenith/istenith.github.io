import React from "react";
import GraphicAnimation from "../graphicAnimation";
import animationData from "../../static/svgs/intro-animation-light.json";

const Logo = require("../../static/images/iste-logo.png");
// import BackgroundParticles from '../BackgroundParticles';
// const Logo_Orange= require('../../static/images/iste-orange.png')
// const Logo_black= require('../../static/images/iste-black.png')
const HomeIntro = () => {
  return (
    <div>
      <div className="intro-container container-fluid">
        <div className="row">
          <div className="left-content">
            <img src={Logo} alt="" className="intro-logo" />
            <h1 style={{ "font-family": "'Catamaran', sans-serif" }}>
              ISTE<span className="nith-text"> NITH</span>
            </h1>
            <div class="animated-text">
              WE ARE <span></span>
            </div>
          </div>
          <div className="right-content">
            <GraphicAnimation animationData={animationData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
