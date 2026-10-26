import React from "react";
import skills from "./data/skills.json";

const Skills = ({ isStandalone = false }) => {
  return (
    <section className={`py-5 ${isStandalone ? 'my-4' : ''}`} id="skills" aria-label="Sahil Singh Technical Skills">
      <div className="text-center mb-5">
        <h2 className="display-6 fw-bold" style={{ color: '#0F172A' }}>Technical Skills</h2>
        <p className="text-muted">Core technologies, libraries, and tools I use regularly</p>
      </div>

      <div className="row g-3 justify-content-center">
        {skills.map((data, index) => (
          <div key={data.id || index} className="col-6 col-sm-4 col-md-3 col-lg-2" data-aos="zoom-in">
            <div className="glass-panel p-3 text-center h-100 d-flex flex-column align-items-center justify-content-center">
              <img
                src={`/assets/${data.imageSrc}`}
                alt={`${data.title} skill - Sahil Singh`}
                className="img-fluid mb-2"
                width="46"
                height="46"
                loading="lazy"
                decoding="async"
                style={{ objectFit: "contain" }}
              />
              <h3 className="small mb-0 fw-bold" style={{ color: '#1E293B' }}>{data.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;