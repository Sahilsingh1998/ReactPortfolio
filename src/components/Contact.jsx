import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    phone: "",
    Message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbxjiU_Bj0Ax-OBhqO8xy-ujwmsCRQ1L3NJoK1d4Nm0GF3hl4gBh5t_5CWYYNJrXE3ZFnw/exec";

    try {
      const response = await fetch(proxyUrl + scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.status === "success") {
        setStatusMessage("Form submitted successfully!");
        setFormData({ Name: "", Email: "", phone: "", Message: "" });
      } else {
        setStatusMessage("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="container contact" id="contact">
      <h1>CONTACT US</h1>
      <section className="contact_us mt-5">
        <div className="container">
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
              type="email"
              name="Email"
              className="form-control form-group py-2"
              placeholder="Email"
              value={formData.Email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
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
            />
            <button type="submit" className="contact_form_submit">
              Send
            </button>
            {statusMessage && <p className="status-message">{statusMessage}</p>}
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
