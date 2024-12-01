import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    phone: "",
    Message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxUDWN4V0IbaqEolVESkEtNRIpzcGCOHsmEU2pX8PPYsDhke-FC6VkjPPERaZoZqhLDww/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (result.status === "success") {
        alert("Form submitted successfully!");
        setFormData({ Name: "", Email: "", phone: "", Message: "" });
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT US</h1>
        <section className="contact_us mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="contact_inner">
                  <div className="row">
                    <div className="col-md-10">
                      <div className="contact_form_inner">
                        <div className="contact_field">
                          <h3>Contact Us</h3>
                          <p>
                            Feel Free to contact us any time. We will get back
                            to you as soon as we can!.
                          </p>
                          <form onSubmit={handleSubmit}>
                            <input
                              type="text"
                              name="Name"
                              className="form-control form-group py-2"
                              placeholder="Name"
                              value={formData.Name}
                              onChange={handleChange}
                              required
                            />
                            <input
                              type="text"
                              name="Email"
                              className="form-control form-group py-2"
                              placeholder="Email"
                              value={formData.Email}
                              onChange={handleChange}
                              required
                            />
                            <input
                              type="text"
                              name="phone"
                              className="form-control form-group py-2"
                              placeholder="Phone no"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                            <textarea
                              className="form-control form-group py-2"
                              name="Message"
                              placeholder="Message"
                              value={formData.Message}
                              onChange={handleChange}
                              required
                            ></textarea>
                            <button
                              type="submit"
                              className="btn btn-primary contact_form_submit"
                            >
                              Send
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="right_conatct_social_icon d-flex align-items-end">
                        <div className="socil_item_inner d-flex">
                          <li>
                            <a
                              href="https://www.facebook.com/share/q2cd6v3zzMU3bDs9/?mibextid=qi2Omg"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-facebook-square"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.instagram.com/it_sahil_rajput?igsh=MWNoM2ZhY3UwYWJhMw=="
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://x.com/sahilsingh7782?t=GYekHIEViuZyDbat-Ml4kw&s=08"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contact_info_sec">
                    <h4>Contact Info</h4>
                    <div className="d-flex info_single align-items-center">
                      <i className="fas fa-headset"></i>
                      <span>+91 7782864311</span>
                    </div>
                    <div className="d-flex info_single align-items-center">
                      <i className="fas fa-envelope-open-text"></i>
                      <span>singhsahil.8340@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
