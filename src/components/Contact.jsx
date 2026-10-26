import React, { useState, useRef, useEffect } from 'react';

function Contact({ isStandalone = false }) {
  return (
    <section className={`py-5 ${isStandalone ? 'my-4' : ''}`} id="contact" aria-label="Contact Sahil Singh">
      <div className="text-center mb-5">
        <h2 className="display-6 fw-bold" style={{ color: '#0F172A' }}>Get In Touch</h2>
        <p className="text-muted">Feel free to reach out for collaborations or project discussions</p>
      </div>

      <div className="row g-4 justify-content-center">
        <div className="col-lg-7">
          <div className="glass-panel p-4 p-md-5">
            <form action="https://formspree.io/f/mbjnazvj" method="POST">
              <div className="mb-3">
                <label className="form-label text-secondary small fw-medium">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Sahil Singh"
                  style={{ background: '#FAF8F5', border: '1px solid rgba(148, 163, 184, 0.3)' }}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-secondary small fw-medium">Your Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="name@example.com"
                  style={{ background: '#FAF8F5', border: '1px solid rgba(148, 163, 184, 0.3)' }}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-secondary small fw-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="+91..."
                  style={{ background: '#FAF8F5', border: '1px solid rgba(148, 163, 184, 0.3)' }}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label text-secondary small fw-medium">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  className="form-control"
                  placeholder="How can Sahil Singh assist you?"
                  style={{ background: '#FAF8F5', border: '1px solid rgba(148, 163, 184, 0.3)' }}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn w-100 py-3 rounded-pill fw-semibold text-white shadow-sm"
                style={{ background: 'linear-gradient(135deg, #4F46E5, #3730A3)', border: 'none' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="glass-panel p-4 p-md-5 h-100 d-flex flex-column justify-content-between">
            <div>
              <h3 className="h5 fw-bold mb-3" style={{ color: '#0F172A' }}>Direct Contact</h3>
              <p className="text-secondary small mb-4">
                Connect directly through phone, email, or my active developer profiles.
              </p>

              <div className="d-flex align-items-center gap-3 mb-3">
                <i className="fas fa-envelope text-primary fs-5" aria-hidden="true"></i>
                <a href="mailto:singhsahil.8340@gmail.com" className="text-secondary text-break">
                  singhsahil.8340@gmail.com
                </a>
              </div>

              <div className="d-flex align-items-center gap-3 mb-4">
                <i className="fas fa-phone text-primary fs-5" aria-hidden="true"></i>
                <a href="tel:+917782864311" className="text-secondary">
                  +91 7782864311
                </a>
              </div>
            </div>

            <div>
              <h4 className="h6 text-muted mb-3 fw-bold">Social Profiles</h4>
              <div className="d-flex gap-3">
                <a href="https://github.com/Sahilsingh1998" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark rounded-circle p-2" aria-label="Sahil Singh on GitHub">
                  <i className="fab fa-github" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/in/sahil-singh-69833425b" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark rounded-circle p-2" aria-label="Sahil Singh on LinkedIn">
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="https://x.com/sahilsingh7782" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark rounded-circle p-2" aria-label="Sahil Singh on Twitter">
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-4 overflow-hidden shadow-sm" style={{ border: '1px solid rgba(148, 163, 184, 0.2)' }}>
        <LazyMap />
      </div>
    </section>
  );
}

export default Contact;

function LazyMap() {
  const [load, setLoad] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoad(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ width: '100%', height: 0, paddingBottom: '32%', position: 'relative' }}>
      {load ? (
        <iframe
          title="Sahil Singh Working Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7205.258830412314!2d87.24579554199615!3d25.45065026019435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f0182634c26067%3A0x26b88ea67dd3e779!2sKursela%2C%20Bihar!5e0!3m2!1sen!2sin!4v1710963292649!5m2!1sen!2sin"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button onClick={() => setLoad(true)} className="btn btn-primary rounded-pill px-4 shadow-sm">
            Load Working Location Map
          </button>
        </div>
      )}
    </div>
  );
}