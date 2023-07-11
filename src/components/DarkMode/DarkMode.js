import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

  const DarkMode = ({ setThemeNavbar, setTheme}) => {
  const theme = localStorage.getItem("selectedTheme");
  console.log(`Theme from the darkMode file is ${setTheme} mode`);
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
    setThemeNavbar("dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
    setThemeNavbar("light");
  };
  
  // Initializing the theme when loading the page
  theme === "light" ? setLightMode() : setDarkMode()

  const handleToggle = () => {
    if (theme === "light") setDarkMode();
    else setLightMode();
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={handleToggle}
        checked={theme === "dark"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
