import React from "react";
import { Hero } from "../Hero";
import { AnimatedSection } from "../AnimatedSection";
import Summary from "./summary";
import Gallery from "./gallery";
import Card from "./card";
import { Registration } from "../Registration";
import { css } from "emotion";
import image from "../../assets/john-jennings.jpg";
import {courseData} from '../../config/data';

const CoursePage = ({pageTitle}) => (
  <div>
    <Hero title1={pageTitle} title2="Design" linkText="Register" image={image} />
    <AnimatedSection>
      <div
        className={css`
          padding: 40px 20px;
        `}
      >
        <Summary summaryItems={courseData.summaryItems} />
        <Card text={courseData.aboutCourse} title={`About the course`} />
        <Gallery projects={courseData.projects} />
        <Card {...courseData.teacherCard} />
      </div>
    </AnimatedSection>
    <Registration />
  </div>
);

export default CoursePage;
