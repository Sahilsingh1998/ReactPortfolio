import React from "react";
import "./about.css";

const About = ({ isStandalone = false }) => {
  return (
    <section className={`py-5 ${isStandalone ? 'my-4' : ''}`} id="about" aria-label="About Sahil Singh">
      <div className="text-center mb-5">
        <h2 className="display-6 fw-bold" style={{ color: '#0F172A' }}>About Me</h2>
        <p className="text-muted">A brief look into my background, focus, and engineering values</p>
      </div>

      <div className="glass-panel p-4 p-md-5">
        <div className="row align-items-center">
          <div className="col-lg-4 text-center mb-4 mb-lg-0">
            <div className="p-2 d-inline-block rounded-4 bg-white shadow-sm" style={{ border: '1px solid rgba(148, 163, 184, 0.2)' }}>
              <img
                src="/assets/img/profile-pic.jpg"
                alt="Sahil Singh Software Developer Profile"
                className="img-fluid rounded-3"
                style={{ maxHeight: '280px', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </div>

          <div className="col-lg-8 ps-lg-4">
            <h3 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>Hi, I'm Sahil Singh</h3>
            <p className="text-secondary mb-3">
              I am a dedicated Full Stack Web Developer based in New Delhi, India. I focus on developing clean, responsive, and search-optimized user interfaces powered by modern JavaScript frameworks.
            </p>
            <p className="text-secondary mb-4">
              Whether building accessible design systems, converting mockups to interactive React applications, or architecting backend services, I prioritize code maintainability, speed, and real-world impact.
            </p>

            <div className="row g-3">
              <div className="col-sm-6">
                <div className="p-3 rounded-3" style={{ background: '#F8FAFC', border: '1px solid rgba(148, 163, 184, 0.2)' }}>
                  <div className="text-muted small">Location</div>
                  <div className="fw-bold" style={{ color: '#0F172A' }}>New Delhi, India</div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="p-3 rounded-3" style={{ background: '#F8FAFC', border: '1px solid rgba(148, 163, 184, 0.2)' }}>
                  <div className="text-muted small">Role</div>
                  <div className="fw-bold" style={{ color: '#0F172A' }}>Full Stack Software Engineer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;