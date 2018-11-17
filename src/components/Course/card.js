import React from "react";
import styles from "./styles";

const Card = ({ text, title, subTitle, imgSrc }) => (
  <div className={styles.card.container}>
    <h1 className={styles.card.title}>{title}</h1>
    <div className={styles.card.content}>
      {imgSrc ? (
        <img
          alt={title}
          className={styles.card.image}
          src={require(`../../assets/${imgSrc}`)}
        />
      ) : null}
      <div>
        {subTitle ? <h2 className={styles.card.title}>{subTitle}</h2> : null}
        <p>{text}</p>
      </div>
    </div>
  </div>
);

export default Card;
