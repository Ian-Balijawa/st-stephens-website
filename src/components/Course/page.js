import React from "react";
import { Hero } from "../Hero";
import { AnimatedSection } from "../AnimatedSection";
import Summary from "./summary";
import Gallery from "./gallery";
import Card from "./card";
import { Registration } from "../Registration";
import image from "../../assets/john-jennings.jpg";
import styles from "./styles";

const CoursePage = ({ pageTitle }) => (
	<div>
		<Hero
			title1={pageTitle}
			title2="Design"
			linkText="Register"
			image={image}
		/>
		<AnimatedSection>
			<div className={styles.pageContainer}></div>
		</AnimatedSection>
		<Registration />
	</div>
);

export default CoursePage;
