import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./styles";
import posed from "react-pose";

const Nav = posed.nav({
  open: {
    delayChildren: 0,
    staggerChildren: 250,
    staggerDirection: -1
  }
});

const LinkItem = posed.div({
  open: { opacity: 1, y: 0 },
  closed: {
    opacity: 0,
    y: 200
  }
});

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  state = {
    isOpen: false
  };

  toggleMenu() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
    document.querySelector("body").style.overflow = this.state.isOpen
      ? "unset"
      : "hidden";
  }

  renderNav() {
    const { isOpen } = this.state;
    return (
      <div>
        <div className={styles.menuLink} onClick={this.toggleMenu}>
          <p>Menu</p>
        </div>
        <Nav className={styles.nav} pose={isOpen ? "open" : "closed"}>
          <LinkItem className={styles.navHome} linkName={"home"}>
            <Link onClick={this.toggleMenu} className={styles.link} to="/">
              Home
            </Link>
          </LinkItem>
          <LinkItem className={styles.navAbout} linkName={"seminars"}>
            <Link
              onClick={this.toggleMenu}
              className={styles.link}
              to="/seminars"
            >
              Seminars
            </Link>
          </LinkItem>
          <LinkItem className={styles.navContact} linkName={"contact"}>
            <Link onClick={this.toggleMenu} className={styles.link} to="/">
              Contact
            </Link>
          </LinkItem>
          <LinkItem className={styles.navCourses} linkName={"course"}>
            <h2>Courses</h2>
            <Link onClick={this.toggleMenu} className={styles.link} to="/">
              Fashion
            </Link>
            <Link onClick={this.toggleMenu} className={styles.link} to="/">
              Interior
            </Link>
            <Link
              onClick={this.toggleMenu}
              className={styles.link}
              to="/graphic"
            >
              Graphics
            </Link>
          </LinkItem>
        </Nav>
      </div>
    );
  }

  render() {
    return <div>{this.renderNav()}</div>;
  }
}

export default Navigation;
