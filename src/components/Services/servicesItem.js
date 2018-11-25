import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import styled from "react-emotion";
import {breakpoints} from '../../config/media-queries';

const mediaQuery = `@media(max-width: ${breakpoints[1]}px)`

const ListItem = styled("div")(styles.container, ({ index }) => ({
  flexDirection: index % 2 === 0 ? "row" : "row-reverse",
  [mediaQuery]: {
    flexDirection: 'column'
  }
}));

const BackgroundImg = styled("div")(
  styles.imageGradient,
  ({ index, gradient }) => ({
    left: index % 2 === 0 ? "-5%" : "5%",
    background: `linear-gradient(0deg, ${gradient[0]}, ${gradient[1]})`
  })
);
const LinkText = styled("p")(styles.linkText, ({ color }) => ({
  borderColor: `#${color}`
}));

const ServicesItem = ({ item, index }) => {
  const { title, color, text, image, gradient } = item;
  const titleArr = title.split(" ");
  return (
    <ListItem index={index}>
      <div className={styles.imageContainer}>
        <BackgroundImg index={index} gradient={gradient} />
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>
          <span className={styles.titleSpan}>{titleArr[0]} </span>
          {titleArr[1]}
        </h1>
        <p>{text}</p>
        <div className={styles.link}>
          <LinkText color={color}>register</LinkText>
        </div>
      </div>
    </ListItem>
  );
};

ServicesItem.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  gradient: PropTypes.array,
  index: PropTypes.number
};

export default ServicesItem;
