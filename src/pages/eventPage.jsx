import React, { useEffect } from "react";
import simpleParallax from "simple-parallax-js";
import { motion } from "framer-motion";
import firstImage from "../static/images/test_wp1.jpg";
import secondImage from "../static/images/test_wp2.jpg";
import thirdImage from "../static/images/pahal_img.JPG";
import fourthImage from "../static/images//test_wp3.jpg";
import Footer from "../components/footer";

const EventPage = () => {
  useEffect(() => {
    const initParallax = () => {
      const imageOne = document.getElementsByClassName("ione");
      new simpleParallax(imageOne, {
        scale: 1.8,
      });

      const imageTwo = document.getElementsByClassName("itwo");
      new simpleParallax(imageTwo, {
        scale: 1.6,
        orientation: "left",
      });

      const imageFour = document.getElementsByClassName("ifour");
      new simpleParallax(imageFour, {
        scale: 1.6,
      });

      const imageFive = document.getElementsByClassName("ifive");
      new simpleParallax(imageFive, {
        scale: 1.6,
        orientation: "right",
      });
    };

    initParallax();
  }, []);

  return (
    <motion.div
      inital={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="whitespace parallax-container">
        <div className="events-container">
          <div className="row">
            <div className="col-lg-6 img one">
              <img src={firstImage} className="ione" alt="" />
            </div>

            <div className="col-lg-4 txt text-1 content">
              <h1>Hult Prize</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam consectetur distinctio placeat, ex, error aut ea
                explicabo earum laudantium rem at id nostrum! Sapiente alias
                quam veniam non magni error.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 txt text-2 content">
              <h1>Prodyogiki</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                non voluptatibus itaque illum, eum eius sequi iure similique
                quasi, rem temporibus ab magni fugit laborum odio facilis
                excepturi? Deserunt, repellendus!
              </p>
            </div>

            <div className="col-lg-6 img two">
              <img src={secondImage} className="itwo" alt="" />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 img four">
              <img src={thirdImage} className="ifour" alt="" />
            </div>

            <div className="col-lg-4 txt text-3 content">
              <h1>Pahal</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                eaque maiores dignissimos nam iure aperiam, ratione molestias
                laboriosam neque iusto beatae eligendi eius vel eveniet autem
                dolore, perferendis, numquam veniam.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 txt text-4 content">
              <h1>Prarambh</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                incidunt ad quaerat. Veniam tempore possimus aut totam sunt
                corrupti suscipit magni blanditiis, quia necessitatibus iste
                fugiat facilis sed fuga voluptatum?
              </p>
            </div>

            <div className="col-lg-6 img five">
              <img src={fourthImage} className="ifive" alt="" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default EventPage;
