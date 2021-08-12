import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { Link } from "../Link";

const links = [
  {
    header: "Courses",
    links: [
      { text: "Images", link: "#" },
      { text: "News", link: "#" },
      { text: "Videos", link: "/Videos" },


    
    ]
  },
  {
    header: "Materials",
    links: [
      { text: "Blog", link: "#" },
      { text: "Freebeis", link: "#" },
    ]
  },
  {
    header: "School",
    links: [{ text: "About", link: "#" }, { text: "Contacts", link: "#" }]
  }
];

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      {links.map(section => (
        <div key={section.header}>
          <h3>{section.header}</h3>
          {section.links.map(link => (
            <Link text={link.text} link={link.link} key={link.text} />
          ))}
        </div>
      ))}
    </div>
  </footer>
);

Footer.propTypes = {
  links: PropTypes.array
};

export default Footer;
