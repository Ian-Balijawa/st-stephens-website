import { css } from "emotion";
import {breakpoints} from '../../config/media-queries';
import variables from "../../config/style-variables";

const styles = {
  container: css`
    display: flex;
    padding: 60px 20px;
    ${variables.fonts.paragraphSize}
  `,
  imageContainer: css`
    width: 50%;
    position: relative;
    @media(max-width: ${breakpoints[1]}px){
      width: 80%;
      max-width: 300px;
      margin: 0 auto;
    }
  `,
  image: css`
    width: 70%;
    height: 90%;
    object-fit: cover;
  `,
  imageGradient: css`
    position: absolute;
    height: 90%;
    width: 70%;
    z-index: -1;
    top: 5%;
  `,
  contentContainer: css`
    padding: 20px;
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  linkText: css`
    padding: 20px;
    margin-right: 10px;
    a {
      color: black;
      text-decoration: none !important;
    }
    
  `,
  title: css`
    font-weight: bold;
    ${variables.fonts.titleSize}
  `,
  titleSpan: css`
    color: #ad1ea4;
  `,
  list: css`
    max-width: 1080px;
    margin: 0 auto;
  `
};

export default styles;
