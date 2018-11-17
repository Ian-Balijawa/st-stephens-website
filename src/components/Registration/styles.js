import { css } from "emotion";
import variables from "../../config/style-variables";

const styles = {
  container: css`
    position: relative;
    padding: 80px;
    background: url(${require("../../assets/jean-philippe-delberghe.jpg")});
    background-size: cover;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      background: ${variables.colors.purple};
      height: 100%;
      width: 100%;
      opacity: 0.8;
      z-index: 1;
    }
  `,
  form: css`
    position: relative;
    z-index: 2;
    max-width: ${variables.size.smallContent};
    margin: 0 auto;
    text-align: center;
    color: white;
    p {
      text-align: left;
      padding: 20px 20px 10px 10px;
      border-bottom: solid 2px white;
      width: fit-content;
      margin: 10px auto;
      min-width: 300px;
    }
    input,
    textarea {
      min-width: 200px;
      margin-left: 12px;
      color: white;
      border: 0;
      outline: 0;
      background: transparent;
    }
  `,
  button: css`
    background: white;
    color: ${variables.colors.purple};
    border: none;
    padding: 8px 20px;
    margin-top: 30px;
    border: solid 2px white;
    font-weight: bold;
  `,
  title: css`
    z-index: 3;
    color: white;
    text-align: center;
    position: relative;
  `
};

export default styles;
