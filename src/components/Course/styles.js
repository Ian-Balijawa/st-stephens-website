import variables from "../../config/style-variables";
import { css } from "emotion";

const styles = {
  summary: {
    container: css`
      display: flex;
      max-width: ${variables.size.smallContent};
      margin: 0 auto;
      justify-content: space-around;
      border-bottom: solid 1px #000;
    `,
    title: css`
      color: ${variables.colors.pink};
      font-weight: bold;
    `,
    info: css`
      font-size: ${variables.fonts.$headerSize};
    `
  },
  card: {
    container: css`
      max-width: ${variables.size.smallContent};
      margin: 100px auto;
      background: white;
      padding: 20px 30px;
      box-shadow: 2px 3px 26px 4px #eee;
    `,
    title: css`
      font-size: ${variables.fonts.headerSize};
    `,
    image: css`
      width: 30%;
      height: 30%;
      margin-right: 25px;
    `,
    content: css`
      display: flex;
      align-items: center;
    `
  },
  gallery: {
    title: css`
      font-size: ${variables.fonts.headerSize};
    `,
    container: css`
      max-width: ${variables.size.mainContent};
      margin: 100px auto;
    `,
    projects: css`
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
    `,
    project: css`
      width: 30%;
      padding: 25px 0;
      img {
        border-radius: 20px;
        box-shadow: 2px 6px 16px 4px #aaa;
        height: 100%;
        width: 100%;
      }
    `
  }
};

export default styles;
