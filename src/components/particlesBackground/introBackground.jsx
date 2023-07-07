import React, { useEffect, useRef } from "react";
import "particles.js";
import LightLogo from "../../static/images/iste-logo-lightblue.png";
import DarkLogo from "../../static/images/iste-logo-dark.png";

import GraphicAnimation from "../graphicAnimation";
import animationData from "../../static/svgs/intro-animation-light.json";

const ParticlesComponent = ({ theme }) => {
  const particlesContainerRef = useRef(null);

  useEffect(() => {
    if (particlesContainerRef.current) {
      window.particlesJS("particles-js", 
       {
          particles: {
            number: {
              value: 500,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: false,
                speed: 0.2,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 1.3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "repulse",
              },
              onclick: {
                enable: false,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 250,
                size: 50,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
          config_demo: {
            hide_card: false,
            background_color: "#b61924",
            background_image: "",
            background_position: "50% 50%",
            background_repeat: "no-repeat",
            background_size: "cover",
          },
        }
      );
    }
  }, []);

  return (
    <>
      <section className="topmost-container">
        <div id="particles-js" ref={particlesContainerRef}>
          <div className="intro-container iste-logo-particles">
            <div className="row">
              <div className="left-content">
                <img
                  src={theme === "dark" ? DarkLogo : LightLogo}
                  alt=""
                  className="intro-logo"
                />
                <h1
                  style={{
                    fontFamily: "'Catamaran', sans-serif",
                  }}
                >
                  ISTE<span className="nith-text"> NITH</span>
                </h1>
                <div class="animated-text">
                  <p style={{ display: "inline" }}>WE ARE </p>
                  <span></span>
                </div>
              </div>
              <div className="right-content">
                <GraphicAnimation animationData={animationData} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParticlesComponent;
