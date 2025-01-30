import React, { useEffect, useRef } from "react";
import pdf from "../pdf/Resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Sahil Singh",
        "I am a Web developer",
      ],
      typeSpeed: 40,
      backSpeed: 40,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container home" id="home">
      <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
        <h2>
          <span ref={typedRef} aria-label="Dynamic heading"></span>
        </h2>

        <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning my-4">
          Download Resume
        </a>
      </div>
      <div className="right">
        <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
          <img src={`/assets/${hero.imgSrc}`} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Home;
