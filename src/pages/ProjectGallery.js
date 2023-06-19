import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from '../data/projects.json'


const ProjectGallery = () => {
  let listOfProjects = projects.map((project, i) => <ProjectCard {...project} key={i} />)
  return (
    <div>
      <div className="jumbotron header">
        <div className="container">
          <div className="row">
            <div className="col-md-12 project-gallery">
              <h1>Project Gallery</h1>
              {listOfProjects}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectGallery;
