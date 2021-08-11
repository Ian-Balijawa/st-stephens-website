import React from "react";
import { Hero } from "../components/Hero";
import { ServicesList } from "../components/Services";
import { AnimatedSection } from "../components/AnimatedSection";
import image from "../assets/home.jpg";
const services = [
  {
    title: "Images",
    text:
      "",
    color: "F1F11E",
    image: require("../assets/home.jpg"),
    gradient: ["#D68800", "#CB5555"]
  },
  {
    title: "News",
    text:"",
    color: "EF78E8",
    image: require("../assets/home.jpg"),
    gradient: ["#0054D6", "#55ACCB"]
  },
  {
    title: "Videos",
    text:
      " ",
    color: "EF78E8",
    image: require("../assets/home.jpg"),
    gradient: ["#D600D6", "#A455CB"]
  }
];

const Home = () => (
  <div>
    <Hero title1="St Stephen's" title2="Website" image={image} />
    <AnimatedSection>
      <ServicesList items={services} />
    </AnimatedSection>
  </div>
);

export default Home;
