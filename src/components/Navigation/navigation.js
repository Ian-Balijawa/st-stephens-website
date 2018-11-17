import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./styles";

class Navigation extends Component {
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
          <div className={styles.menuLink} onClick={this.toggleMenu}>
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
        <div className={styles.menuLink} onClick={this.toggleMenu}>
          <p>Menu</p>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderNav()}</div>;
  }
}

export default Navigation;
