import React from "react";
import styles from "./styles";

const Summary = ({ summaryItems }) => (
  <div className={styles.container}>
    {summaryItems.map(item => (
      <SummaryItem key={item.title} title={item.title} info={item.info} />
    ))}
  </div>
);

const SummaryItem = ({ title, info }) => (
  <div>
    <p className={styles.title}>{title}</p>
    <p className={styles.info}>{info}</p>
  </div>
);
export default Summary;
