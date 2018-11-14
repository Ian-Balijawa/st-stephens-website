import variables from "../../config/style-variables";

const styles = {
  container: {
    fontFamily: variables.fonts.$primaryFont,
    maxWidth: "1080px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px"
  },
  footer: {
    borderTop: "solid 2px grey"
  }
};

export default styles;
