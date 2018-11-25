import { css } from "emotion";
import variables from "../../config/style-variables";
import {breakpoints} from '../../config/media-queries';

const styles = {
  container: css`
    padding: 10px;
    margin: 50px 0;
  `,
  title: css`
    font-weight: normal;
    padding-top: 10px;
    ${variables.fonts.subheadingSize};
  `,
  textContainer: css`
    display: flex;
    justify-content: space-between;
    @media(max-width: ${breakpoints[1]}px){
      flex-direction: column-reverse;
      margin-bottom: 20px;
    }
  `,
  iframe: css`
    height: 500px;
    border-radius: 20px;
    border: none;
    box-shadow: 2px 6px 16px 4px #aaa;
    @media(max-width: ${breakpoints[1]}px){
      height: 300px;
    }
  `,
  date: css`
    line-height: 0.5em;
    p:nth-child(1) {
      color: ${variables.colors.pink};
    }
  `
};

export default styles;
