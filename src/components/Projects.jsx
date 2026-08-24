import projects from './data/projects.json';

function Projects() {
  return (
    <div className="container projects my-3" id="projects">
    <h2 className="my-4">PROJECTS </h2>
      <div className="row">
        {projects.map((data) => (
          <div key={data.key} className="col-md-3 col-lg-3 col-12 my-3">
            <div
              className="card text-light bg-dark d-flex flex-column h-100"
              data-aos="fade-up-right"
              data-aos-duration="1000"
            >
                <img
                  src={data.imageSrc}
                  className="card-img-top"
                  alt={data.title}
                  width="400"
                  height="200"
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
              <div className="card-body text-center">
                <h2 className="card-title">{data.title}</h2>
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
