import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";

const Video = ({ url, title, date }) => (
  <div className={styles.container}>
  <div className={ styles.textContainer}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.date}>
        <p>date</p>
        <p>{date}</p>
      </div>
    </div>
    <iframe
      className={styles.iframe}
      width="100%"
      src={url}
      title={title}
    />
  </div>
);

Video.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string
};

export default Video;
