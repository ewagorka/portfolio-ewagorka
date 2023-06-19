import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import "../styles/Contact.css"


function Contact(props) {
  return (
    <div>
      <div className="jumbotron header">
        <div className="container">
          <div className="row">
            <div className="col-md-6 center-column">
              <h1>LinkedIn</h1>
              <a className="btn CTA">
                View Project Gallery</a>
            </div>
            <div className="col-md-6 center-column">
              <h1>CV</h1>
              <a className="btn CTA">
                View Project Gallery</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
