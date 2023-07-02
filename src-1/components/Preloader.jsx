import React, { useEffect } from "react";
import { preLoaderAnim } from "../animation/preloaderAnim";
const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  });

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Develop,</span>
        <span>Grow,</span>
        <span>Vibe.</span>
      </div>
    </div>
  );
};

export default Preloader;
