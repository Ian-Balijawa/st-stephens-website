import React from "react";
import PropTypes from "prop-types";
import ServicesItem from "./servicesItem";
import styles from "./styles";

const ServicesList = ({ items }) => {
  const list = items.map((item, index) => (
    <ServicesItem item={item} key={item.color} index={index} />
  ));
  return <section className={styles.list}>{list}</section>;
};

ServicesList.propTypes = {
  items: PropTypes.array
};

export default ServicesList;
