import React from "react";
import "../styles/projectCard.css"
import { Link } from "react-router-dom";

const ProjectCard = ({ id, image, title, description }) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
            <div className="card">
                <img src={image} className="card-img-top"
                    alt="Purple jellyfishes swimming in very dark water."></img>
                    <div className="card-body">
                        <div className="tags">
                            <span className="badge badge-pill badge-secondary">HTML</span>
                            <span class="badge badge-pill badge-secondary">CSS</span>
                            <span class="badge badge-pill badge-secondary">Javascript</span>
                        </div>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description} </p>
                        <Link to={`/project/${id}`}>
                        <a className="btn CTA">
                            View Project</a>
                            </Link>
                    </div>
            </div>
        </div>

    );
}

export default ProjectCard;
