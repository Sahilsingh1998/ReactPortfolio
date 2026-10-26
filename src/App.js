import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbaar from './components/Navbaar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GoTop from './components/GoTop';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Complete single-page view for the homepage
const MainPortfolio = () => (
  <main className="container my-4" id="main">
    <Home />
    <About />
    <Experience />
    <Skills />
    <Projects />
    <Contact />
  </main>
);

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 800,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <Router>
      <Navbaar />
      <Routes>
        {/* Full landing showcase for maximum user retention */}
        <Route path="/" element={<MainPortfolio />} />

        {/* Dedicated deep pages for Google indexation of "Sahil Singh" */}
        <Route path="/about" element={<main className="container my-5 pt-4"><About isStandalone /></main>} />
        <Route path="/experience" element={<main className="container my-5 pt-4"><Experience isStandalone /></main>} />
        <Route path="/skills" element={<main className="container my-5 pt-4"><Skills isStandalone /></main>} />
        <Route path="/projects" element={<main className="container my-5 pt-4"><Projects isStandalone /></main>} />
        <Route path="/contact" element={<main className="container my-5 pt-4"><Contact isStandalone /></main>} />
      </Routes>
      <Footer />
      <GoTop />
    </Router>
  );
}

export default App;