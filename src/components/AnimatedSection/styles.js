import { css } from "emotion";
import variables from "../../config/style-variables";

const styles = {
  backgroundStyle: css`
    position: relative;
    &:before {
      content: '';
      z-index: 1;
      background: linear-gradient(180deg, #fff, #f0feff);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
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
