import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";

const HeroText = ({ text }) => <h1 className={styles.heroText}>{text}</h1>;

HeroText.propTypes = {
  text: PropTypes.string
};

export default HeroText;
