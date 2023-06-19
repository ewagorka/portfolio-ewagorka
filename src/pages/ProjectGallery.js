import React from "react";
import ProjectCard from "../components/ProjectCard";


function ProjectGallery() {
  return (
    <div>
      <div className="jumbotron header">
        <div className="container">
          <div className="row">
            <div className="col-md-12 project-gallery">
              <h1>Project Gallery</h1>
              <ProjectCard />
              <ProjectCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectGallery;
