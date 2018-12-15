import React from "react";
import PropTypes from "prop-types";
import Parallax from 'parallax-js';
import styles from "./styles";
import styled from "react-emotion";
import {breakpoints} from '../../config/media-queries';
import { Link } from "react-router-dom";
import variables from '../../config/style-variables';
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
const LinkText = styled('div')(styles.linkText, ({ color }) => ({
  position: 'relative',
  color: `${variables.colors.grey};`,
  '&:hover:after': {
    width: '100%'
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0, 
    left: 0,
    height: '100%',
    background: `#${color}`,
    transition: '0.5s',
    width: '3px',
    zIndex: -1
  }
}));

class ServicesItem extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    var scene = this.myRef.current;
    let options = {};
    if(this.props.index % 2) {
      options = {
        invertX: false, 
        invertY: false
      }
    }
    this.parallax = new Parallax(scene, options);
  }

  componentWillUnmount() {
    this.parallax.destroy();
  }

  render() {
    const { title, color, text, image, gradient } = this.props.item;
    const titleArr = title.split(" ");
    return (
      <ListItem index={this.props.index} >
        <div className={styles.imageContainer} ref={this.myRef}>
          <BackgroundImg index={this.props.index} gradient={gradient} data-depth="1.3"/>
          <img src={image} alt={title} className={styles.image} />
        </div>
        <div className={styles.contentContainer}>
          <h1 className={styles.title} >
            <span className={styles.titleSpan}>{titleArr[0]} </span>
            {titleArr[1]}
          </h1>
          <p>{text}</p>
          <Link  to="/contact" style={{textDecoration: 'none'}}>
            <div className={styles.link}>
                <LinkText color={color}>register</LinkText>
            </div>
          </Link>
        </div>
      </ListItem>
    );
  };
  
}


ServicesItem.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  gradient: PropTypes.array,
  index: PropTypes.number
};

export default ServicesItem;
