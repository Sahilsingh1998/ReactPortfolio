import React, { useEffect, useRef } from "react";
import pdf from "../pdf/Resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Full Stack Developer",
        "React & JavaScript Engineer",
        "Software Engineer",
      ],
      typeSpeed: 45,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);
    return () => typed.destroy();
  }, []);

  return (
    <section className="row align-items-center py-5 my-md-4" id="home" aria-label="Sahil Singh Overview">
      <div className="col-lg-7 text-center text-lg-start pe-lg-5" data-aos="fade-right">
        <span 
          className="badge rounded-pill mb-3 px-3 py-2 fw-semibold" 
          style={{ background: '#EDE9FE', color: '#5B21B6', border: '1px solid #DDD6FE' }}
        >
          Available for Hire & Collaboration
        </span>
        
        {/* Dominant H1 for search crawler indexation of your exact name */}
        <h1 className="display-4 fw-extrabold mb-3" style={{ color: '#0F172A', letterSpacing: '-1px' }}>
          Hi, I'm <span style={{ background: 'linear-gradient(135deg, #4F46E5, #0D9488)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Sahil Singh</span>
        </h1>

        <h2 className="h4 text-muted mb-4 fw-normal" style={{ minHeight: "2rem" }}>
          I build scalable web apps as a <span ref={typedRef} style={{ color: '#4F46E5', fontWeight: 600 }}></span>
        </h2>

        <p className="lead text-secondary mb-4" style={{ maxWidth: "560px", fontSize: "1.05rem" }}>
          Full Stack Software Developer based in New Delhi, India. I specialize in building responsive, high-performance web applications using modern React, clean architecture, and JavaScript.
        </p>

        <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
          <a
            href={pdf}
            download="Sahil_Singh_Resume.pdf"
            className="btn btn-primary px-4 py-3 rounded-pill fw-semibold shadow-sm"
            style={{ background: 'linear-gradient(135deg, #4F46E5, #3730A3)', border: 'none' }}
            aria-label="Download Sahil Singh Resume"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="btn btn-outline-dark px-4 py-3 rounded-pill fw-semibold"
            style={{ borderColor: 'rgba(148, 163, 184, 0.4)' }}
          >
            Explore Projects
          </a>
        </div>
      </div>

      <div className="col-lg-5 mt-5 mt-lg-0 text-center" data-aos="fade-left">
        <div className="position-relative d-inline-block">
          <div 
            className="position-absolute w-100 h-100 rounded-circle" 
            style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.12) 0%, rgba(13,148,136,0) 70%)', filter: 'blur(30px)', zIndex: 0 }} 
          />
          <img
            src={`/assets/${hero.imgSrc}`}
            alt="Sahil Singh - Full Stack Developer"
            width="400"
            height="400"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            className="img-fluid rounded-circle position-relative shadow-sm"
            style={{ maxWidth: "340px", width: "100%", height: "auto", border: '5px solid #FFFFFF', zIndex: 1 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;