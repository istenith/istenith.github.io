import React from "react";
import { HashRouter } from "react-router-dom";

import Navbar from "./components/navbar";
import Headroom from "react-headroom";
import AnimatedCursor from "./components/animatedCursor";
import AnimatedRoutes from "./components/AnimatedRoutes";
// eslint-disable-next-line
import Preloader from "./components/Preloader";
// eslint-disable-next-line
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      {/* <Preloader /> */}
      <AnimatedCursor />
      <HashRouter>
        <Headroom>
          <Navbar />
        </Headroom>
        <AnimatedRoutes />
      </HashRouter>
    </>
  );
};

export default App;
