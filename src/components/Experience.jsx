import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <div className="container" id="experience">
      <h1 className="my-4">EXPERIENCE</h1>
      <div className="row">
        {experience.map((data) => (
          <div
            key={data.id}
            className="col-md-4 col-lg-4 col-12 d-flex flex-column align-items-center mb-4"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="ex-items">
              <div className="left mb-3">
                <img
                  src={`/assets/${data.imageSrc}`}
                  alt=""
                  className="img-fluid"
                  style={{ maxWidth: "100px" }}
                />
              </div>
              <div className="right">
                <h2>{data.role}</h2>
                <h4>
                  <span style={{ color: "yellowgreen" }}>
                    {data.startDate} - {data.endDate}
                  </span>{" "}
                  <span style={{ color: "yellow" }}>{data.location}</span>
                </h4>
                {data.experiences.map((exp, index) => (
                  <h5 key={index} style={{ color: "yellow" }}>
                    {exp}
                  </h5>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
