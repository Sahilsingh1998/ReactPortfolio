import React from 'react';
import projects from './data/projects.json';

function Projects({ isStandalone = false }) {
  return (
    <section className={`py-5 ${isStandalone ? 'my-4' : ''}`} id="projects" aria-label="Sahil Singh Projects">
      <div className="text-center mb-5">
        <h2 className="display-6 fw-bold" style={{ color: '#0F172A' }}>Featured Projects</h2>
        <p className="text-muted">A selection of web apps and full stack solutions built by Sahil Singh</p>
      </div>

      <div className="row g-4">
        {projects.map((data) => (
          <div key={data.key || data.id} className="col-md-6 col-lg-4" data-aos="fade-up">
            <div className="glass-panel overflow-hidden h-100 d-flex flex-column">
              <div className="position-relative overflow-hidden" style={{ height: '210px', background: '#F1F5F9' }}>
                <img
                  src={data.imageSrc}
                  className="w-100 h-100"
                  alt={`${data.title} - Project by Sahil Singh`}
                  loading="lazy"
                  decoding="async"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div className="p-4 d-flex flex-column flex-grow-1 justify-content-between">
                <div>
                  <h3 className="h5 fw-bold mb-2" style={{ color: '#0F172A' }}>{data.title}</h3>
                  <p className="text-secondary small mb-3">{data.description}</p>
                </div>

                <div className="pt-2">
                  <a
                    href={data.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm w-100 py-2 rounded-pill fw-semibold"
                    style={{ borderColor: '#C7D2FE', color: '#4F46E5' }}
                    aria-label={`View ${data.title} project by Sahil Singh`}
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;