import './App.css';
import Navbaar from './components/Navbaar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience'
import Skills from "./components/Skills";
import Projects from './components/Projects';
import Contact from './components/Contact';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';
import GoTop from "./components/GoTop"
import Footer from './components/Footer';

function App() {
  useEffect(()=>{
    Aos.init();
  },
  [])
  return (
    <>
      <Navbaar></Navbaar>
      <div className="container">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer/>
      <GoTop />
    </>
  );
}

export default App;
