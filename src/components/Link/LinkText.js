import React from "react";
import styles from "./styles";

export const Link = ({ text, link }) => (
  <p className={styles.link} link={link}>
    {text}
  </p>
);
