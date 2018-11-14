import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import glamorous from "glamorous";
const { Div, H1, P, Img, Span } = glamorous;

const ListItem = glamorous.div(styles.container, ({ index }) => ({
  flexDirection: index % 2 === 0 ? "row" : "row-reverse"
}));

const BackgroundImg = glamorous.div(
  styles.imageGradient,
  ({ index, gradient }) => ({
    left: index % 2 === 0 ? "-5%" : "5%",
    background: `linear-gradient(0deg, ${gradient[0]}, ${gradient[1]})`
  })
);

const ServicesItem = ({ item, index }) => {
  const { title, color, text, image, gradient } = item;
  const titleArr = title.split(" ");
  return (
    <ListItem index={index}>
      <Div style={styles.imageContainer}>
        <BackgroundImg index={index} gradient={gradient} />
        <Img src={image} alt={title} style={styles.image} />
      </Div>
      <Div style={styles.contentContainer}>
        <H1 style={styles.title}>
          <Span style={styles.titleSpan}>{titleArr[0]} </Span>
          {titleArr[1]}
        </H1>
        <P>{text}</P>
        <Div style={styles.link}>
          <P
            style={Object.assign({}, styles.linkText, {
              borderColor: `#${color}`
            })}
          >
            register
          </P>
        </Div>
      </Div>
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
