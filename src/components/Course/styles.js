import variables from "../../config/style-variables";
import { css } from "emotion";
import {breakpoints} from '../../config/media-queries';

const styles = {
  pageContainer: css`
  @media(min-width: ${breakpoints[0]}px){
    padding: 40px 20px;
  }`,
  summary: {
    container: css`
      display: flex;
      ${variables.size.smallContent};
      margin: 0 auto;
      justify-content: space-around;
      border-bottom: solid 1px #000;
      flex-wrap: wrap;
    `,
    title: css`
      color: ${variables.colors.pink};
      font-weight: bold;
      padding: 10px 5px;
    `,
    info: css`
    ${variables.fonts.headerSize}
    padding: 10px 5px;
    `
  },
  card: {
    container: css`
      ${variables.size.smallContent};
      margin: 100px auto;
      background: white;
      padding: 20px 30px;
      box-shadow: 2px 3px 26px 4px #eee;
    `,
    title: css`
      ${variables.fonts.headerSize}
    `,
    image: css`
      width: 30%;
      height: 30%;
      margin-right: 25px;
      min-width: 180px;
    `,
    content: css`
      display: inline-flex;
      align-items: center;
      @media(max-width: ${breakpoints[0]}px){
        flex-wrap: wrap;
      }
    `
  },
  gallery: {
    title: css`
      ${variables.fonts.headerSize};
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
      @media(max-width: ${breakpoints[0]}px){
        justify-content: center;
      }
    `,
    project: css`
      width: 30%;
      min-width: 120px;
      padding: 25px 5px;
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
