import React from "react";
import experience from "./data/experience.json";

const Experience = ({ isStandalone = false }) => {
  return (
    <section className={`py-5 ${isStandalone ? 'my-4' : ''}`} id="experience" aria-label="Sahil Singh Professional Experience">
      <div className="text-center mb-5">
        <h2 className="display-6 fw-bold" style={{ color: '#0F172A' }}>Experience</h2>
        <p className="text-muted">Career journey and professional engineering background</p>
      </div>

      <div className="row g-4">
        {experience.map((data) => (
          <div key={data.id} className="col-lg-4 col-md-6" data-aos="fade-up">
            <div className="glass-panel p-4 h-100 d-flex flex-column text-start">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center p-2"
                  style={{ width: "56px", height: "56px", background: "#F1F5F9", border: "1px solid rgba(148, 163, 184, 0.2)" }}
                >
                  <img
                    src={`/assets/${data.imageSrc}`}
                    alt={`${data.role} at ${data.organisation || 'Company'} - Sahil Singh`}
                    className="img-fluid"
                    loading="lazy"
                    decoding="async"
                    style={{ maxHeight: "38px", maxWidth: "38px", objectFit: "contain" }}
                  />
                </div>
                <div>
                  <h3 className="h6 fw-bold mb-0" style={{ color: '#0F172A' }}>{data.role}</h3>
                  <span className="text-muted small">{data.location}</span>
                </div>
              </div>

              <span className="badge align-self-start mb-3" style={{ background: "#EEF2FF", color: "#4F46E5", border: "1px solid #C7D2FE" }}>
                {data.startDate} — {data.endDate}
              </span>

              <div className="mt-auto">
                {data.experiences && data.experiences.map((exp, index) => (
                  <p key={index} className="text-secondary small mb-2">
                    • {exp}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;