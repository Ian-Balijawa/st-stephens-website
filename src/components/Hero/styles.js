import variables from "../../config/style-variables";
import image from "../../assets/MaskGroup2.jpg";

const styles = {
  container: {
    background: `linear-gradient(0deg, rgba(35, 0, 255, 0.2), rgba(35, 0, 255, 0.5)), url(${image}) center no-repeat`,
    height: "100vh",
    width: "100vw",
    display: "flex",
    color: "white",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%"
  },
  title1: {
    fontSize: 292,
    margin: 0,
    fontFamily: variables.fonts.$primaryFont
  },
  title2: {
    fontSize: 57,
    margin: 0,
    fontFamily: variables.fonts.$primaryFont
  }
};

export default styles;
