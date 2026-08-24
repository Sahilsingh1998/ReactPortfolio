import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <div className="container" id="experience">
      <h2 className="my-4">EXPERIENCE</h2>
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
                  width="100"
                  height="100"
                  loading="lazy"
                  decoding="async"
                  style={{ maxWidth: "100px" }}
                />
              </div>
              <div className="right">
                <h3>{data.role}</h3>
                <h3>
                  <span style={{ color: "yellowgreen" }}>
                    {data.startDate} - {data.endDate}
                  </span>{" "}
                  <span style={{ color: "yellow" }}>{data.location}</span>
                </h3>
                {data.experiences.map((exp, index) => (
                  <p key={index} style={{ color: "yellow", margin: 0 }}>
                    {exp}
                  </p>
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
