import { css } from "emotion";
import variables from "../../config/style-variables";

const styles = {
  link: css`
    &:hover {
      color: ${variables.colors.$purple};
    }
  `
};

export default styles;
