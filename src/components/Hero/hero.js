import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import glamorous from "glamorous";
const { Div, H1, H2, Button } = glamorous;

const Hero = ({ title1, title2, linkText }) => (
  <Div style={styles.container}>
    <H1 style={styles.title1}>{title1}</H1>
    <H2 style={styles.title2}>{title2}</H2>
    {linkText ? <Button style={styles.button}>{linkText}</Button> : null}
  </Div>
);

Hero.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  linkText: PropTypes.string
};

export default Hero;
