import glamorous from "glamorous";
import React from "react";
import styles from "./styles";

const { P } = glamorous;

const Summary = ({ summaryItems }) => (
  <div style={styles.container}>
    {summaryItems.map(item => (
      <SummaryItem key={item.title} title={item.title} info={item.info} />
    ))}
  </div>
);

const SummaryItem = ({ title, info }) => (
  <div>
    <P style={styles.title}>{title}</P>
    <P style={styles.info}>{info}</P>
  </div>
);
export default Summary;
