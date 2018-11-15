import React from "react";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { AnimatedSection } from "../components/AnimatedSection";

const Graphic = () => (
  <div className="home">
    <Hero title1="Graphic" title2="Design" />
    <AnimatedSection />
    <Footer />
  </div>
);

export default Graphic;
