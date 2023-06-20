import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from '../data/projects.json'
import "../styles/ProjectGallery.css"


const ProjectGallery = () => {
  let listOfProjects = projects.map((project, i) => <ProjectCard {...project} key={i} />)
  return (
    <div>
      <div className="jumbotron header project-gallery">
        <div className="container">
          <div className="row">
          <h1>Project Gallery</h1>
            <div className="col-md-12 project-gallery">
              {listOfProjects}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectGallery;
