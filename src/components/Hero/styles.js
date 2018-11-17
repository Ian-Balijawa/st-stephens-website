import image from "../../assets/MaskGroup2.jpg";
import { css } from "emotion";

const styles = {
  container: css`
    background: linear-gradient(
        0deg,
        rgba(35, 0, 255, 0.2),
        rgba(35, 0, 255, 0.5)
      ),
      url(${image}) center no-repeat;
    height: 100vh;
    width: 100vw;
    display: flex;
    color: white;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
  `,
  title1: css`
    font-size: 292px;
    margin: 0;
  `,
  title2: css`
    font-size: 57px;
    margin: 0;
  `,
  button: css`
    font-size: 24px;
    background: #15c0d4;
    color: #fff;
    border: solid 2px #15c0d4;
    margin-top: 50px;
    border-radius: 30px;
    padding: 10px 20px;
  `
};

export default styles;
