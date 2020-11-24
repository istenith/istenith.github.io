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

fairyTheme.overrideThemeStyles = ({ rhythm }) => ({
  a:{
    textShadow: `none`,
    backgroundImage: `none`,
  },
  'h1,h2,h3,p':{
    marginBottom: rhythm(1/2),
    marginTop: rhythm(1/4),
  }
});

const typography = new Typography(fairyTheme);

export default typography
