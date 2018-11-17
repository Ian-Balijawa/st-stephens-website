import { css } from "emotion";

const styles = {
  backgroundStyle: css`
    background: linear-gradient(180deg, #fff, #f0feff);
    height: 100%;
    position: relative;
    z-index: -1;
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
