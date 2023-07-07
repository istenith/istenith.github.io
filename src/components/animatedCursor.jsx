import React from "react";
import AnimatedCursor from "react-animated-cursor";

const animatedCursor = () => {
  return (
    <AnimatedCursor
      innerSize={6}
      outerSize={36}
      color="115, 40, 200"
      outerAlpha={0.2}
      outerStyle={{
        border: "2px solid #7328C8",
      }}
      innerScale={1}
      outerScale={2}
      trailingSpeed={3.5}
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
