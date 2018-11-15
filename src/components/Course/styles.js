import variables from "../../config/style-variables";

const styles = {
  container: {
    display: "flex",
    maxWidth: variables.size.smallContent,
    margin: "0 auto",
    justifyContent: "space-between"
  },
  title: {
    fontFamily: variables.fonts.$primaryFont,
    color: "#AD1EA4"
  },
  info: {
    fontFamily: variables.fonts.$primaryFont
  }
};

export default styles;
