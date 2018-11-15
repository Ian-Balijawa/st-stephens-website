import React, { Component } from "react";
import Home from "./screens/home";
import Graphic from "./screens/graphic";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Div, P, Nav, H2 } from "glamorous";
import homeImg from "./assets/MaskGroup2.jpg";
import aboutImg from "./assets/jean-philippe-delberghe.jpg";
import variables from "./config/style-variables";

const styles = {
  menuClosed: {},
  nav: {
    position: "absolute",
    height: "100%",
    width: "100%",
    display: "grid",
    gridTemplateColumns: " repeat(3, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)"
  },
  navHome: {
    background: `linear-gradient(0deg, rgba(35, 0, 255, 0.2), rgba(35, 0, 255, 0.5)), url(${homeImg}) center no-repeat`,
    display: "flex",
    alignItems: "center"
  },
  navAbout: {
    background: "red",
    gridColumn: "2 / 4",
    background: `linear-gradient(0deg, rgba(0,247,255,0.6), rgba(0,247,255,0.8)), url(${aboutImg}) center no-repeat`
  },
  navContact: { background: "purple" },
  navCourses: { background: "blue", gridColumn: "1 / 3", gridRow: "2" },
  link: {
    fontFamily: variables.fonts.$primaryFont,
    margin: "0 auto",
    color: "white",
    fontWeight: "bold",
    fontSize: 38,
    textDecoration: "none"
  }
};

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  state = {
    menuOpen: false
  };

  toggleMenu() {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }));
    document.querySelector("body").style.overflow = this.state.menuOpen
      ? "unset"
      : "hidden";
  }

  renderNav() {
    if (this.state.menuOpen) {
      return (
        <Div>
          <Div style={styles.menuClosed} onClick={this.toggleMenu}>
            <P>Close</P>
          </Div>
          <Nav style={styles.nav}>
            <Div style={styles.navHome}>
              <Link onClick={this.toggleMenu} style={styles.link} to="/">
                Home
              </Link>
            </Div>
            <Div style={styles.navAbout}>
              <Link onClick={this.toggleMenu} style={styles.link} to="/">
                About
              </Link>
            </Div>
            <Div style={styles.navContact}>
              <Link onClick={this.toggleMenu} style={styles.link} to="/">
                Contact
              </Link>
            </Div>
            <Div style={styles.navCourses}>
              <H2>Courses</H2>
              <Link onClick={this.toggleMenu} style={styles.link} to="/">
                Fashion
              </Link>
              <Link onClick={this.toggleMenu} style={styles.link} to="/">
                Interior
              </Link>
              <Link onClick={this.toggleMenu} style={styles.link} to="/graphic">
                Graphics
              </Link>
            </Div>
          </Nav>
        </Div>
      );
    } else {
      return (
        <Div style={styles.menuClosed} onClick={this.toggleMenu}>
          <P>Menu</P>
        </Div>
      );
    }
  }

  render() {
    return (
      <Router>
        <div>
          {this.renderNav()}
          <Route path="/" exact component={Home} />
          <Route path="/graphic" exact component={Graphic} />
        </div>
      </Router>
    );
  }
}

export default AppRouter;
