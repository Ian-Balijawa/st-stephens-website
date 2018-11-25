import { css } from "emotion";
import styles from '../../config/style-variables';

export default {
  container: css`
    max-width: ${styles.size.mainContent};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 30px;
    flex-wrap: wrap;
  `,
  footer: css`
    border-top: solid 2px grey;
  `,
  text: css`
  text-align: center;
  padding: 20px;
  a {
    font-weight: bold;
  }
  `
};
