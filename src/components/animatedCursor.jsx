import React from "react";
import AnimatedCursor from "react-animated-cursor";

const animatedCursor = () => {
  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={16}
      color="137, 43, 224"
      outerAlpha={0.2}
      innerScale={0.8}
      outerScale={5}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
        ".blogList",
        ".w3c__message--widget",
      ]}
    />
  );
};

export default animatedCursor;
