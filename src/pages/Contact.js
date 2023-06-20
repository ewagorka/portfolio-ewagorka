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
              <a href ="https://www.linkedin.com/in/ewa-g%C3%B3rka-9003b2167/" className="btn CTA">
                View My Linkedin Profile</a>
            </div>
            <div className="col-md-6 center-column">
              <h1>Github Profile</h1>
              <a href="https://github.com/ewagorka" className="btn CTA">
                View My Github Profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
