import React from "react";
import bgImg from "../../static/images/events-background.jpg";
import testImg from "../../static/images/teamiste-jan2k23.webp";

const eventBrief = () => {
  const divStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      {/* <div className="center-header-div">
          <h2 className='center-heading'>Events</h2>
        </div> */}
      <div className="cards-whole-container" style={divStyle}>
        <div class="cards-container">
          <div class="card">
            <div class="face face1">
              <div class="content">
                <img src={testImg} alt="Hult Logo" />
                <h3>Hult Prize</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur deleniti explicabo laboriosam dolores ullam,
                  cupiditate reprehenderit labore nulla ipsum iste nobis
                  inventore beatae.{" "}
                </p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="face face1" id="prody-face">
              <div class="content">
                <img src={testImg} alt="Prodyogiki Logo" />
                <h3>Prodyogiki</h3>
              </div>
            </div>
            <div class="face face2" id="prody-face-2">
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur deleniti explicabo laboriosam dolores ullam,
                  cupiditate reprehenderit labore nulla ipsum iste nobis
                  inventore beatae.
                </p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="face face1" id="prarambh-face">
              <div class="content">
                <img src={testImg} alt="Prarambh Logo" />
                <h3>Prarambh</h3>
              </div>
            </div>
            <div class="face face2" id="prarambh-face-2">
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur deleniti explicabo laboriosam dolores ullam,
                  cupiditate reprehenderit labore nulla ipsum iste nobis
                  inventore beatae.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default eventBrief;
