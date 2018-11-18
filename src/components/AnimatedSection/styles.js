import { css } from "emotion";
import variables from "../../config/style-variables";

const styles = {
  backgroundStyle: css`
    background: linear-gradient(180deg, #fff, #f0feff);
    height: 100%;
    position: relative;
    z-index: -1;
  `,
  container: css`
    padding: 30px;
    max-width: ${variables.size.mainContent};
    margin: 0 auto;
  `,
  canvasStyle: css`
    position: absolute;
    pointer-events: none;
    height: 100%;
    width: 100%;
    z-index: -1;
  `
};

export default styles;
