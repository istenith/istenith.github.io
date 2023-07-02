import React from "react";
import Lottie from "lottie-react";

const graphicAnimation = ({ animationData }) => {
  return (
    <div>
      <Lottie animationData={animationData} />
    </div>
  );
};

export default graphicAnimation;
