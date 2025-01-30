import React from "react";
import skills from "./data/skills.json";

const Skills = () => {
  return (
    <div className="container skills" id="skills">
      <h1 className="my-4">SKILLS</h1>
      <div className="row">
        {skills.map((data, index) => (
          <div
            key={index}
            className="col-md-4 mb-4 d-flex justify-content-center" // 3 columns with spacing
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <div className="item text-center">
              <img
                src={`/assets/${data.imageSrc}`}
                alt={data.title}
                className="img-fluid mb-3"
              />
              <h3>{data.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
