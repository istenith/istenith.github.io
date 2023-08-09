import React from "react";
import underConstructionImage from './static/images/underconstruction.png';

// import { HashRouter } from "react-router-dom";
// import Navbar from "./components/navbar";
// import Headroom from "react-headroom";
// import AnimatedCursor from "./components/animatedCursor";
// import AnimatedRoutes from "./components/AnimatedRoutes";
// eslint-disable-next-line
// import Preloader from "./components/Preloader";
// eslint-disable-next-line

const App = () => {
  // const initialTheme = localStorage.getItem("selectedTheme");
  // console.log(`Found ${initialTheme} mode in local storage, setting theme that only.`);
  // const [theme, setTheme] = useState(initialTheme);
  // const setThemeOuter = (currentTheme)=>{
  //   setTheme(currentTheme)
  // }
  return (
    // Uncomment the below lines to Have everything working!
    // <>
    //   <Preloader />
    //   <AnimatedCursor />
    //   <HashRouter>
    //     <Headroom>
    //       <Navbar />
    //     </Headroom>
    //     <AnimatedRoutes />
    //   </HashRouter>
    // </>
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '3rem',
      flexDirection: 'column',
      fontFamily: 'Anton, sans-serif',
    }}
  >
    <img
      src={underConstructionImage}
      alt="Under Construction"
      style={{ width: '200px', height: 'auto' }} // Adjust the size as needed
    />
    <p style={{ marginTop: '1rem', fontFamily: 'Anton, sans-serif' }}>Coming Soon!</p>
  </div>
  );
};

export default App;
