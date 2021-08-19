import React from "react";
import { Hero } from "../components/Hero";
import { ServicesList } from "../components/Services";
import { AnimatedSection } from "../components/AnimatedSection";
import image from "../assets/ne.jpg";
const services = [
  {
    title: "About",
    text:
      "St. Stephen’s College  Bajja is built on a catholic foundation but admits students of all faiths. It is a private school with a current ratio of 1:1.5 boys to girls. It offers both sciences and arts. The school, though on a catholic foundation, admits students of all faiths.",
    color: "F1F11E",
    image: require("../assets/home.jpg"),
    gradient: ["#D68800", "#CB5555"]
  },
  {
    title: "Admissions",
    text:"The offices at the school and at Namuwongo are always open for registration of new students except on 22nd December to 2nd January. Our school fees structure is affordable. However we argue you to pay on time to avoid inconveniences.",
    color: "EF78E8",
    image: require("../assets/home.jpg"),
    gradient: ["#0054D6", "#55ACCB"]
  },
  {
    title: "Co-curricular activities",
    text:
      "The school has a variety of games and sports for the students to keep fit and they include; Football for both boys and girls, Netball, Volley ball for both boys and girls, Table Tennis, Scrabble, Chess and Athletics.",
    color: "EF78E8",
    image: require("../assets/home.jpg"),
    gradient: ["#D600D6", "#A455CB"]
  }
];

const Home = () => (
  <div>
    <Hero title1="St Stephen's Website" title2="Education for a better tomorrow" image={image} />
    <AnimatedSection>
      <ServicesList items={services} />
    </AnimatedSection>
  </div>
);

export default Home;
