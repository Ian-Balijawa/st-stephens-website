import React from "react";
import PropTypes from "prop-types";
import ServicesItem from "./servicesItem";
import { Section } from "glamorous";
import styles from "./styles";

const ServicesList = ({ items }) => {
  const list = items.map((item, index) => (
    <ServicesItem item={item} key={item.color} index={index} />
  ));
  return <Section style={styles.list}>{list}</Section>;
};

ServicesList.propTypes = {
  items: PropTypes.array
};

export default ServicesList;
