import variables from "../../config/style-variables";

const styles = {
  container: {
    display: "flex",
    fontFamily: variables.fonts.$primaryFont,
    padding: "60px 20px"
  },
  imageContainer: {
    width: "50%",
    position: "relative"
  },
  image: {
    width: "70%",
    height: "90%",
    objectFit: "cover"
  },
  imageGradient: {
    position: "absolute",
    height: "90%",
    width: "70%",
    zIndex: -1,
    top: "5%"
  },
  contentContainer: {
    padding: 20,
    marginLeft: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  linkText: {
    borderLeft: "solid 5px",
    padding: "20px"
  },
  title: {
    fontSize: 54,
    fontWeight: "bold"
  },
  titleSpan: {
    color: "#AD1EA4"
  },
  list: {
    maxWidth: "1080px",
    margin: "0 auto"
  }
};

export default styles;
