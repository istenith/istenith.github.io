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
        <div className="row">
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
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore aliquam similique, assumenda odit deleniti, omnis
                repellendus accusantium corrupti atque adipisci, facere velit
                sunt aperiam labore porro consequuntur. Itaque, eveniet
                necessitatibus.
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
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore aliquam similique, assumenda odit deleniti, omnis
                repellendus accusantium corrupti atque adipisci, facere velit
                sunt aperiam labore porro consequuntur. Itaque, eveniet
                necessitatibus.
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
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore aliquam similique, assumenda odit deleniti, omnis
                repellendus accusantium corrupti atque adipisci, facere velit
                sunt aperiam labore porro consequuntur. Itaque, eveniet
                necessitatibus.
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
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore aliquam similique, assumenda odit deleniti, omnis
                repellendus accusantium corrupti atque adipisci, facere velit
                sunt aperiam labore porro consequuntur. Itaque, eveniet
                necessitatibus.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Domains;
