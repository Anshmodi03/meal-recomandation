import React, { useState } from "react";
import "./ContactSection.css"; // Assuming you have a corresponding CSS file for styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ContactSection = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredContact: "Email",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here (e.g., API call)
    closeModal(); // Close the modal after submission if desired
  };

  return (
    <section className="contact-section">
      <button className="close-button" onClick={closeModal} aria-label="Close">
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <h2 className="form-title">Send Us A Message</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="form-input"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          className="form-input"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          className="form-input"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <div className="radio-group">
          <h4 className="radio-label">Preferred method of communication</h4>
          <div className="radio-options">
            <div className="radio-option">
              <input
                id="radio-group-1"
                type="radio"
                name="preferredContact"
                value="Email"
                checked={formData.preferredContact === "Email"}
                onChange={handleInputChange}
              />
              <label htmlFor="radio-group-1" className="radio-text">
                Email
              </label>
            </div>
            <div className="radio-option">
              <input
                id="radio-group-2"
                type="radio"
                name="preferredContact"
                value="Phone"
                checked={formData.preferredContact === "Phone"}
                onChange={handleInputChange}
              />
              <label htmlFor="radio-group-2" className="radio-text">
                Phone
              </label>
            </div>
          </div>
        </div>
        <input
          type="text"
          name="message"
          className="form-input mess"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
        />
        <button type="submit" className="submit-btn">
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
