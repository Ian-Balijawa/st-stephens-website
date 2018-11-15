import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";

const Hero = ({ title1, title2, linkText }) => (
  <div className={styles.container}>
    <h1 className={styles.title1}>{title1}</h1>
    <h2 className={styles.title2}>{title2}</h2>
    {linkText ? <button className={styles.button}>{linkText}</button> : null}
  </div>
);

Hero.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  linkText: PropTypes.string
};

export default Hero;
