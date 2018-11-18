import { css } from "emotion";
import variables from "../../config/style-variables";

const styles = {
  container: css`
    padding: 10px;
    margin: 50px 0;
  `,
  title: css`
    font-weight: normal;
    display: inline-block;
    padding-top: 10px;
  `,
  iframe: css`
    border-radius: 20px;
    border: none;
    box-shadow: 2px 6px 16px 4px #aaa;
  `,
  date: css`
    display: inline-block;
    float: right;
    padding: 20px;
    line-height: 0.5em;
    p:nth-child(1) {
      color: ${variables.colors.pink};
    }
  `
};

export default styles;
