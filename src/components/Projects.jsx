import React from 'react';
import projects from './data/projects.json';

function Projects() {
  return (
    <div className="container projects my-3" id="projects">
      <h1>PROJECTS</h1>
      <div className="row d-flex justify-content-center align-items-center">
        {projects.map((data) => (
          <div key={data.key} className="my-3 col-md-4 col-lg-3 col-12 mx-3">
            <div
              className="card text-light bg-dark"
              data-aos="fade-up-right"
              data-aos-duration="1000"
            >
              <img
                src={data.imageSrc} 
                className="card-img-top"
                alt={data.title}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <a
                  href={data.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
