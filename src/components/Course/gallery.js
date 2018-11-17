import React from "react";
import styles from "./styles";

const Gallery = ({ projects }) => (
  <div className={styles.gallery.container}>
    <h1 className={styles.gallery.title}>Projects in course</h1>
    <div className={styles.gallery.projects}>
      {projects.map(project => (
        <ProjectView project={project} key={project.title} />
      ))}
    </div>
  </div>
);

const ProjectView = ({ project }) => (
  <div className={styles.gallery.project}>
    <img src={require(`../../assets/${project.src}`)} alt={project.title} />
  </div>
);

export default Gallery;
