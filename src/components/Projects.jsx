import React from 'react'
import projects from "./data/projects.json";

function Projects() {
  return (
    <>
      <div className="container projects my-3" id='projects'>
        <h1>Projects</h1>
        <div className="row d-flex justify-content-center align-items-center">
          {projects.map((data) => (<>

            <div key={data.id} className='my-3 col-md-4 col-lg-3 col-12 mx-3'>
              <div className="card text-light bg-dark"
               data-aos="fade-up-right" data-aos-duration="1000"
              >
                <img src={data.imageSrc} class="card-img-top" alt="..." />
                <div class="card-body text-center">
                  <h5 class="card-title">{data.title}</h5>
                  <p class="card-text">{data.description}</p>
                  <a href={data.source} target='blank' class="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
          </>)
          )}
        </div>
      </div>
    </>
  )
}

export default Projects
