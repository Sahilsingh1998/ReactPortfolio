import React from "react";
import './about.css';

const About = () => {
  return (
    <>
      <div className="container" id="About">
        <section className="about-me" id="about-me">
          <div className="container">
            <div className="about-me-container">
              <h1 class="my-4">ABOUT ME</h1>
              <div className="about-me-flex-container mt-5">
                <div className="about-me-image">
                  <div className="back-div" />
                  <div className="black-image">
                    {}
                    <img src="/assets/img/profile-pic.jpg" alt="Sahil Singh" />
                  </div>
                  <div className="main-image">
                    {}
                    <img src="/assets/img/profile-pic.jpg" alt="Sahil Singh" />
                  </div>
                </div>
                <div className="about-me-content">
                  <div className="logo">
                    <img
                      src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/20391be8bf1ed24ef0e5da066bf68a5f6ee78fa1/images/logo.svg"
                      alt="smit"
                    />
                  </div>
                  <div className="text">
                    <h2>I am Sahil Singh and I am a Web Developer</h2>
                    <br/>
                    Enthusiastic and detail-oriented web developer with creating and optimizing web applications. Adept at coding, debugging, and maintaining responsive and user-friendly websites. Passionate about staying updated with the latest web development trends and technologies. Strong problem-solving skills and a commitment to delivering high-quality work.
                    I can utilize my skills & enhance learning in the field of work. Capable of mastering new technologies.
                  </div>
                </div>
              </div>
              <div className="mail-button mail-button2">
                <a href="mailto:singhsahil.8340@gmail.com">
                  <img
                    src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/20391be8bf1ed24ef0e5da066bf68a5f6ee78fa1/images/mail.svg"
                    alt="mail"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
      </div>
    </>
  );
};

export default About;
