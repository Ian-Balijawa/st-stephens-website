import variables from "../../config/style-variables";
import { css } from "emotion";

const styles = {
  container: css`
    display: flex;
    font-family: ${variables.fonts.$primaryFont};
    padding: 60px 20px;
  `,
  imageContainer: css`
    width: 50%;
    position: relative;
  `,
  image: css`
    width: 70%;
    height: 90%;
    object-fit: cover;
  `,
  imageGradient: css`
    position: absolute;
    height: 90%;
    width: 70%;
    z-index: -1;
    top: 5%;
  `,
  contentContainer: css`
    padding: 20;
    margin-left: 20;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  linkText: css`
    border-left: solid 5px;
    padding: 20px;
  `,
  title: css`
    font-size: 54px;
    font-weight: bold;
  `,
  titleSpan: css`
    color: #ad1ea4;
  `,
  list: css`
    max-width: 1080px;
    margin: 0 auto;
  `
};

export default styles;
