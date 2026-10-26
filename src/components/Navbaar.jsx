import React from 'react';
import { NavLink } from 'react-router-dom';
import headerData from './data/header.json';

function Navbaar() {
  return (
    <header 
      className="sticky-top" 
      style={{ 
        background: 'rgba(250, 248, 245, 0.88)', 
        backdropFilter: 'blur(12px)', 
        borderBottom: '1px solid rgba(148, 163, 184, 0.2)' 
      }}
    >
      <nav className="container py-3 d-flex justify-content-between align-items-center" aria-label="Main Navigation">
        {/* Strictly an anchor brand element to protect the uniqueness of H1 for Sahil Singh */}
        <NavLink to="/" className="text-decoration-none fw-extrabold fs-4 d-flex align-items-center gap-2">
          <span style={{ 
            background: 'linear-gradient(135deg, #1E293B, #4F46E5)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.5px' 
          }}>
            {headerData.brand || "Sahil Singh"}
          </span>
        </NavLink>

        <div className="d-flex align-items-center gap-3 gap-md-4">
          <NavLink to="/" className="fw-medium text-secondary text-decoration-none d-none d-sm-inline">Home</NavLink>
          <NavLink to="/about" className="fw-medium text-secondary text-decoration-none d-none d-sm-inline">About</NavLink>
          <NavLink to="/experience" className="fw-medium text-secondary text-decoration-none d-none d-sm-inline">Experience</NavLink>
          <NavLink to="/skills" className="fw-medium text-secondary text-decoration-none d-none d-sm-inline">Skills</NavLink>
          <NavLink to="/projects" className="fw-medium text-secondary text-decoration-none d-none d-sm-inline">Projects</NavLink>
          <NavLink 
            to="/contact" 
            className="btn btn-sm px-4 py-2 fw-semibold text-white rounded-pill shadow-sm"
            style={{ background: 'linear-gradient(135deg, #4F46E5, #3730A3)', border: 'none' }}
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbaar;