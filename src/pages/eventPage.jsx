import React, { useEffect } from "react";
import simpleParallax from "simple-parallax-js";
import { motion } from "framer-motion";
import firstImage from "../static/images/hult_events.jpg";
import secondImage from "../static/images/prodyy_events.jpg";
import thirdImage from "../static/images/pahal_events.jpg";
import fourthImage from "../static/images//prarambh_events.jpg";
import Footer from "../components/footer";

const EventPage = (useTheme) => {
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
              <p>The Hult Prize is an annual international competition that challenges university students from around the world to develop innovative solutions to pressing global issues. It was founded by Ahmad Ashkar and is funded by Bertil Hult, the latter of whom, along with his family, donates US$1 million in seed capital to help the winning team launch a social enterprise. The Prize is a partnership between Hult International Business School and the United Nations Foundation. The Hult Prize has been referred to as the "Nobel Prize for students" by Nobel laureate Muhammad Yunus.</p>
            <p>At ISTE NITH, we are proud to host and conduct the on-campus round of the Hult Prize. </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 txt text-2 content">
              <h1>Prodyogiki</h1>
              <p>Prodyogiki, an exciting event organized by ISTE NIT Hamirpur. It is a platform where technology and engineering enthusiasts come together to showcase their skills and explore the practical aspects of what they have learned.It offers a variety of engaging activities, including interactive sessions, workshops, events, quizzes, and more.</p>
            <p>At ISTE NIT Hamirpur, we are dedicated to promoting a culture of technological advancement. Prodyogiki serves as a melting pot, bringing together different branches of engineering and technical fields, and setting new standards of excellence at NIT Hamirpur.</p>
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
              <p>Team ISTE at NIT Hamirpur is taking an initiative called PAHAL to support freshers during the admission process. We understand that starting college can be overwhelming, and that's why we are here to help. Our dedicated help desk and in-person guidance will provide you with the assistance and information you need to navigate the admission process smoothly. With PAHAL, we extend a helping hand, ensuring a confident start to your academic journey and making your transition to college life a seamless experience at NIT Hamirpur.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 txt text-4 content">
              <h1>Prarambh</h1>
              <p>"Prarambh" – an exciting event by ISTE NIT Hamirpur that introduces you to the inspiring world of ISTE, a technical society dedicated to fostering innovation and excellence. Experience thrilling technical competitions, engaging workshops, thought-provoking seminars, and much more. Join us to unlock your potential, forge meaningful connections, and embark on a remarkable college journey filled with growth and success. Get ready to ignite your passion with ISTE NIT Hamirpur at Prarambh!</p>
            </div>

            <div className="col-lg-6 img five">
              <img src={fourthImage} className="ifive" alt="" />
            </div>
          </div>
        </div>
      </div>

      <Footer useTheme={useTheme}/>
    </motion.div>
  );
};

export default EventPage;
