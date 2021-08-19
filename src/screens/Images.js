import React from "react";
import { CoursePage } from "../components/Tools";
import "./styles/images.css";

const Images = () => (
	<>
		<CoursePage pageTitle={"Images"} />
		<div className='image__container'>
			<img src='/images/download.jpg' alt='picture' />
			<img src='/images/students.jpg' alt='picture' />
			<img src='/images/images2.jpg' alt='picture' />
			<img src='/images/download.jpg' alt='picture' />
			<img src='/images/image.jpg' alt='picture' />
			<img src='/images/download.jpg' alt='picture' />
			<img src='/images/images2.jpg' alt='picture' />
		</div>
	</>
);

export default Images;
