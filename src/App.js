import React, { useState } from "react";
import { HashRouter } from "react-router-dom";

import Navbar from "./components/navbar";
import Headroom from "react-headroom";
import AnimatedCursor from "./components/animatedCursor";
import AnimatedRoutes from "./components/AnimatedRoutes";
// eslint-disable-next-line
import Preloader from "./components/Preloader";
// eslint-disable-next-line

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      {/* <Preloader /> */}
      <AnimatedCursor />
      <HashRouter>
        <Headroom>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
        </Headroom>
        <AnimatedRoutes />
      </HashRouter>
    </>
  );
};

export default App;
