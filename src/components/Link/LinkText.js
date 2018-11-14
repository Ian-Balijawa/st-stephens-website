import glamorous from "glamorous";
import React from "react";

const LinkText = glamorous.p({
  ":hover": {
    color: "purple"
  }
});
export const Link = ({ text, link }) => <LinkText link={link}>{text}</LinkText>;
