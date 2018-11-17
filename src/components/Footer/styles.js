import variables from "../../config/style-variables";
import { css } from "emotion";

const styles = {
  container: css`
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  `,
  footer: css`
    border-top: solid 2px grey;
  `
};

export default styles;
