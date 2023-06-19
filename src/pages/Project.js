import React from "react";

function Project() {
    return (
        <div>
            <h2>Project title</h2>
            <p>More details here</p>
            <Link to="learn" role="button" className="btn btn-link">
            Deployed link
            </Link>
            <Link to="learn" role="button" className="btn btn-link">
            Deployed link
            </Link>
            <a>Deployed link</a>
            <a>Link to github</a>
        </div>
    );
}

export default Project;