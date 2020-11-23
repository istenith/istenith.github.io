import Typography from "typography"
import fairyTheme from "typography-theme-fairy-gates"

//const typography = new Typography({
    //baseFontSize: "18px",
    //baseLineHeight: 1.666,
    //headerFontFamily: [
      //"Avenir Next",
      //"Helvetica Neue",
      //"Segoe UI",
      //"Helvetica",
      //"Arial",
      //"sans-serif",
    //],
    //bodyFontFamily: ["Georgia", "serif"],
  //})

fairyTheme.overrideThemeStyles = () => ({
  a:{
    textShadow: `none`,
    backgroundImage: `none`,
  },
});

const typography = new Typography(fairyTheme);

export default typography
