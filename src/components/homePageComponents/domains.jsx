// eslint-disable-next-line
import React, { useEffect, useRef } from "react";
// eslint-disable-next-line
import { motion, useInView, useAnimation } from "framer-motion";
import GraphicAnimation from "../graphicAnimation";
import techAnimation from "../../static/svgs/tech-animation.json";
import prAnimation from "../../static/svgs/pr-animation.json";
import designAnimation from "../../static/svgs/design-animation.json";
import financeAnimation from "../../static/svgs/finance-animation.json";

const Domains = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    // eslint-disable-next-line
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        className="domain-container"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.25 }}
      >
        <div className="center-header-div">
          <h2 className="center-heading">Domains</h2>
        </div>
        <div className="row domain-cards-container">
          <div className="domain-card">
            <motion.div
              className="graphic-animation-container"
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 2, delay: 0.25 }}
            >
              <GraphicAnimation animationData={financeAnimation} />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 2, delay: 0.75 }}
            >
              <h2 className="domain-heading">Finance</h2>
              <p className="para-domain">
                The management of ISTE's financial activities falls within the
                purview of the Finance domain. It oversees activities such as
                accounting, financial reporting, and budgeting. The team
                diligently allocates resources, monitors cash flow, and controls
                expenditures, ensuring effective project and event execution.
                Additionally, ensures accountability and transparency in
                financial matters. They also provide valuable financial guidance
                and support across various areas when needed.
              </p>
            </motion.div>
          </div>

          <div className="domain-card">
            <motion.div
              className="graphic-animation-container"
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 2, delay: 0.25 }}
            >
              <GraphicAnimation animationData={designAnimation} />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 2, delay: 0.75 }}
            >
              <h2 className="domain-heading">Design</h2>
              <p className="para-domain">
                The design team is the creative force to elevate society's
                visual, artistic and aesthetic aspects. The Design team works
                develop imaginatively captivating posters, graphics and event
                branding. With their creative expertise, the Design domain plays
                a crucial role in effectively conveying information and engaging
                audiences. Incorporating animations provides an immersive and
                interactive experience for the spectators, adding an extra layer
                of visual appeal to our digital presence.
              </p>
            </motion.div>
          </div>

          <div className="domain-card">
            <motion.div
              className="graphic-animation-container"
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 2, delay: 0.25 }}
            >
              <GraphicAnimation animationData={prAnimation} />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 2, delay: 0.75 }}
            >
              <h2 className="domain-heading">Public Relation</h2>
              <p className="para-domain">
                The PR domain of ISTE is committed to providing the best
                possible communication with its members, institutions and the
                public. PR focuses on managing the reputation of the society. It
                involves activities such as writing content, creating press
                releases, and promoting events. It is important to maintain
                healthy relationships with the people of NITH in order to build
                trust and credibility. It serves as the voice of the society in
                the institution, creating an enchanting effect in the minds of
                the people.
              </p>
            </motion.div>
          </div>

          <div className="domain-card">
            <motion.div
              className="graphic-animation-container"
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 2, delay: 0.25 }}
            >
              <GraphicAnimation animationData={techAnimation} />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 2, delay: 0.75 }}
            >
              <h2 className="domain-heading">Tech</h2>
              <p className="para-domain">
                Welcome to ISTE's Tech Domain! Serving as the organization's
                technological backbone, the Tech domain is responsible for
                delivering essential technical resources and support. Our Tech
                team takes charge of building and updating the main website,
                alongwith specific event websites, ensuring it remains at the
                forefront with up-to-date events, news, and valuable resources.
                It also includes hardware. It diligently oversees the smooth
                operation and management of our online platforms.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Domains;
