import variables from "../../config/style-variables";
import { css } from "emotion";

const styles = {
  container: css`
    display: flex;
    max-width: ${variables.size.smallContent};
    margin: 0 auto;
    justify-content: space-between;
  `,
  title: css`
    font-family: ${variables.fonts.$primaryFont};
    color: #ad1ea4;
  `,
  info: css`
    font-family: ${variables.fonts.$primaryFont};
  `
};

export default styles;
