import React from "react";
import profilePicture from "../images/profile-photo.jpeg"
import "../styles/Home.css"

function Home() {
  return (
    <div>
      <div className="jumbotron header">
        <div className="container">
          <div className="row">
            <div className="col-md-6 left-column">
              <h1>Hi, I'm Ewa - welcome to my portfolio</h1>
              <p>Hello! My name is Ewa, and I am passionate about front-end development and UI/UX design. I recently joined a front-end development bootcamp to further my knowledge of HTML, CSS, JavaScript, APIs, and React.👩‍💻</p>
              <a className="btn CTA">
                View Project Gallery</a>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5 right-column">
              <img src={profilePicture} alt="Ewa's profile picture" className="img-fluid"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
