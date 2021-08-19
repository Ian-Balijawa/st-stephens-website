import React from "react";
import { Hero } from "../Hero";
import { AnimatedSection } from "../AnimatedSection";
import image from "../../assets/home.jpg";
import styles from "./styles";

const CoursePage = ({ pageTitle }) => (
	<div>
		<Hero title1={pageTitle} title2='' linkText='' image={image} />
		<AnimatedSection>
			<div className={styles.pageContainer}></div>
		</AnimatedSection>
	</div>
);

export default CoursePage;
