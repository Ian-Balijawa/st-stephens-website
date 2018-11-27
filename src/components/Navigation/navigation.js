import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./styles";
import posed from "react-pose";
import styled from "react-emotion";
import variables from "../../config/style-variables";

const Nav = posed.nav({
  open: {
    delayChildren: 0,
    staggerChildren: 250
  }
});

const LinkItem = posed.div({
  open: { opacity: 1, y: 0, applyAtStart: { display: "grid" } },
  closed: {
    opacity: 0,
    y: 200,
    applyAtEnd: { display: "none" }
  }
});

const MenuLink = styled("div")`
  position: absolute;
  padding: 20px;
  color: ${({ theme, isOpen }) =>
    theme === "light" && !isOpen ? "black" : "white"};
  z-index: 30;
  ${variables.fonts.headerSize}
`;

class Navigation extends Component {
  state = {
    isOpen: false,
    theme: this.props.location.pathname === "/seminars" ? "light" : "dark"
  };

  menuClicked(theme) {
    this.toggleMenu();
    this.toggleTheme(theme);
  }

  toggleMenu() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
    document.querySelector("body").style.overflow = this.state.isOpen
      ? "unset"
      : "hidden";
  }

  toggleTheme(theme) {
    this.setState({ theme });
  }

  renderNav() {
    const { isOpen, theme } = this.state;
    return (
      <div>
        <MenuLink
          onClick={() => this.menuClicked(this.state.theme)}
          theme={theme}
          isOpen={isOpen}
        >
          <p>{isOpen ? "Close" : "Menu"}</p>
        </MenuLink>
        <Nav className={styles.nav} pose={isOpen ? "open" : "closed"} initialPose={'closed'}>
          <LinkItem className={styles.navHome} linkName={"home"}>
            <Link
              onClick={() => this.menuClicked("dark")}
              className={styles.link}
              to="/"
            >
              Home
            </Link>
          </LinkItem>
          <LinkItem className={styles.navSeminar} linkName={"seminars"}>
            <Link
              onClick={() => this.menuClicked("light")}
              className={styles.link}
              to="/seminars"
            >
              Seminars
            </Link>
          </LinkItem>
          <LinkItem className={styles.navContact} linkName={"contact"}>
            <Link
              onClick={() => this.menuClicked("dark")}
              className={styles.link}
              to="/contact"
            >
              Contact
            </Link>
          </LinkItem>
          <LinkItem className={styles.navCourses} linkName={"course"}>
            <h2>Courses</h2>
            <Link
              onClick={() => this.menuClicked("dark")}
              className={styles.link}
              to="/fashion"
            >
              Fashion
            </Link>
            <Link
              onClick={() => this.menuClicked("dark")}
              className={styles.link}
              to="/interior"
            >
              Interior
            </Link>
            <Link
              onClick={() => this.menuClicked("dark")}
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
