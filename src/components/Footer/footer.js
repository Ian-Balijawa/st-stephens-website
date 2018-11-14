import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { Div, H3, Footer } from "glamorous";
import { Link } from "../Link";

const links = [
  {
    header: "Courses",
    links: [
      { text: "Interior", link: "#" },
      { text: "Fashion", link: "#" },
      { text: "Graphics", link: "#" }
    ]
  },
  {
    header: "Materials",
    links: [
      { text: "Seminars", link: "#" },
      { text: "Blog", link: "#" },
      { text: "Freebeis", link: "#" }
    ]
  },
  {
    header: "School",
    links: [{ text: "About", link: "#" }, { text: "Contacts", link: "#" }]
  }
];

const PageFooter = () => (
  <Footer style={styles.footer}>
    <Div style={styles.container}>
      {links.map(section => (
        <div key={section.header}>
          <H3>{section.header}</H3>
          {section.links.map(link => (
            <Link text={link.text} link={link.link} key={link.text} />
          ))}
        </div>
      ))}
    </Div>
  </Footer>
);

Footer.propTypes = {
  links: PropTypes.array
};
export default PageFooter;
