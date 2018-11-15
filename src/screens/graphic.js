import React from "react";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { AnimatedSection } from "../components/AnimatedSection";
import { Summary } from "../components/Course";

const summaryItems = [
  { title: "start", info: "april 14th" },
  { title: "duration", info: "3 months" },
  { title: "parts", info: "24 lessons" },
  { title: "projects", info: "6 projects" }
];

const Graphic = () => (
  <div className="home">
    <Hero title1="Graphic" title2="Design" linkText="Register" />
    <AnimatedSection>
      <Summary summaryItems={summaryItems} />
    </AnimatedSection>
    <Footer />
  </div>
);

export default Graphic;
