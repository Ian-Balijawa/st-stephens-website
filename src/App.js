import React, { Component } from "react";
import Home from "./screens/home";
import Graphic from "./screens/graphic";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import homeImg from "./assets/MaskGroup2.jpg";
import aboutImg from "./assets/jean-philippe-delberghe.jpg";
import variables from "./config/style-variables";
import { css } from "emotion";

const styles = {
  menuClosed: css``,
  nav: css`
    position: absolute;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  `,
  navHome: css`
    background: linear-gradient(
        0deg,
        rgba(35, 0, 255, 0.2),
        rgba(35, 0, 255, 0.5)
      ),
      url(${homeImg}) center no-repeat;
    display: flex;
    align-items: center;
  `,
  navAbout: css`
    background: red;
    grid-column: 2 / 4;
    background: linear-gradient(
        0deg,
        rgba(0, 247, 255, 0.6),
        rgba(0, 247, 255, 0.8)
      ),
      url(${aboutImg}) center no-repeat;
  `,
  navContact: css`
    background: purple;
  `,
  navCourses: css`
    background: blue;
    grid-column: 1 / 3;
    grid-row: 2;
  `,
  link: css`
    font-family: ${variables.fonts.$primaryFont};
    margin: 0 auto;
    color: white;
    font-weight: bold;
    font-size: 38px;
    text-decoration: "none";
  `
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
        <div>
          <div className={styles.menuClosed} onClick={this.toggleMenu}>
            <p>Close</p>
          </div>
          <nav className={styles.nav}>
            <div className={styles.navHome}>
              <Link onClick={this.toggleMenu} className={styles.link} to="/">
                Home
              </Link>
            </div>
            <div className={styles.navAbout}>
              <Link onClick={this.toggleMenu} className={styles.link} to="/">
                About
              </Link>
            </div>
            <div className={styles.navContact}>
              <Link onClick={this.toggleMenu} className={styles.link} to="/">
                Contact
              </Link>
            </div>
            <div className={styles.navCourses}>
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
            </div>
          </nav>
        </div>
      );
    } else {
      return (
        <div className={styles.menuClosed} onClick={this.toggleMenu}>
          <p>Menu</p>
        </div>
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
