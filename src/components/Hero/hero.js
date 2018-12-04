import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import styled from "react-emotion";
import { Link } from "react-router-dom";

const Container = styled("div")(
  props =>
    `
    background: linear-gradient(
        0deg,
        rgba(35, 0, 255, 0.2),
        rgba(35, 0, 255, 0.5)
      ),
      url(${props.image}) center no-repeat;
    height: 100vh;
    width: 100vw;
    display: flex;
    color: white;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
  `
);

const Hero = ({ title1, title2, linkText, image }) => (
  <Container image={image}>
    <h1 className={styles.title1}>{title1}</h1>
    <h2 className={styles.title2}>{title2}</h2>
    {linkText ? <button className={styles.button}><Link to='/contact'>{linkText}</Link></button> : null}
  </Container>
);

Hero.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  linkText: PropTypes.string
};

export default Hero;
