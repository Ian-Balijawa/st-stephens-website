import variables from "../../config/style-variables";
import { css } from "emotion";
import homeImg from "../../assets/MaskGroup2.jpg";
import seminarImg from "../../assets/jean-philippe-delberghe.jpg";
import courseImg from "../../assets/john-jennings.jpg";

const styles = {
  menuLink: css`
    position: absolute;
    padding: 20px;
    color: white;
    z-index: 30;
    font-size: ${variables.fonts.$headerSize};
  `,
  nav: css`
    position: absolute;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    color: white;
    div {
      display: flex;
      justify-content: center;
    }
  `,
  navHome: css`
    background: linear-gradient(
        0deg,
        rgba(35, 0, 255, 0.2),
        rgba(35, 0, 255, 0.5)
      ),
      url(${homeImg}) top left no-repeat;
    align-items: center;
  `,
  navSeminar: css`
    background: red;
    grid-column: 2 / 4;
    background: linear-gradient(
        0deg,
        rgba(0, 247, 255, 0.6),
        rgba(0, 247, 255, 0.8)
      ),
      url(${seminarImg}) center no-repeat;
    align-items: center;
  `,
  navContact: css`
    background: linear-gradient(
        0deg,
        rgba(220, 23, 23, 0.2),
        rgba(220, 23, 23, 0.5)
      ),
      url(${homeImg}) top left no-repeat;
    align-items: center;
    align-items: center;
  `,
  navCourses: css`
    background: linear-gradient(
        0deg,
        rgba(241, 241, 30, 0.3),
        rgba(241, 241, 30, 0.5)
      ),
      url(${courseImg}) center no-repeat;
    align-items: center;
    grid-column: 1 / 3;
    grid-row: 2;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 25%;
    color: black;
  `,
  link: css`
    color: inherit;
    font-weight: bold;
    font-size: 54px;
    text-decoration: none;
  `
};

export default styles;
