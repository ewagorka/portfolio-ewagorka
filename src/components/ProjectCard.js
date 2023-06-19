import React from "react";
import "../styles/projectCard.css"

function ProjectCard() {
    return (
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
            <div className="card">
                <img src="https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" className="card-img-top"
                    alt="Purple jellyfishes swimming in very dark water."></img>
                    <div className="card-body">
                        <div className="tags">
                            <span className="badge badge-pill badge-secondary">Coming Soon</span>
                            <span class="badge badge-pill badge-secondary">HTML</span>
                        </div>
                        <h5 className="card-title">Project 4</h5>
                        <p className="card-text">Exciting things are coming!<br /> Come back next Tuesday to see what
                            this project turns out to be. </p>
                        <a className="btn CTA">
                            View Project</a>
                    </div>
            </div>
        </div>

    );
}

export default ProjectCard;