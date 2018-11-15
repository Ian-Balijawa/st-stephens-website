import { css } from "emotion";
import variables from "../../config/style-variables";

const styles = {
  link: css`
    font-family: ${variables.fonts.$primaryFont};
    &:hover {
      color: ${variables.colors.$purple};
    }
  `
};

export default styles;
