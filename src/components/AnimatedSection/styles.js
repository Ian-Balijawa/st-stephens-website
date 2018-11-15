import { css } from "emotion";

const styles = {
  backgroundStyle: css`
    background: linear-gradient(180deg, #fff, #f0feff);
    height: 100%;
    position: relative;
  `,
  canvasStyle: css`
    position: absolute;
    pointer-events: none;
    height: 100%;
    width: 100%;
  `
};

export default styles;
