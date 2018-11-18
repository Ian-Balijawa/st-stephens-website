import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";

const Video = ({ url, title, date }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.date}>
      <p>date</p>
      <p>{date}</p>
    </div>
    <iframe
      className={styles.iframe}
      width="100%"
      height="500px"
      src="https://www.youtube.com/embed/tgbNymZ7vqY"
    />
  </div>
);

Video.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string
};

export default Video;
