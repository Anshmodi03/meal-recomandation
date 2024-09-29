import React, { useState } from "react";
import ContactSection from "./ContactSection"; // Import ContactSection component
import "./Footer.css";

const Footer = () => {
  const [isContactOpen, setContactOpen] = useState(false); // State to control the popup visibility

  const handleContactClick = () => {
    setContactOpen(true); // Open the contact popup
  };

  const closeModal = () => {
    setContactOpen(false); // Close the contact popup
  };

  return (
    <footer className="bg-gray-800 text-black text-center py-4">
      <p className="link">
        <button
          onClick={handleContactClick}
          className="text-indigo-400 hover:text-indigo-600"
        >
          Contact Us
        </button>
      </p>
      <p>
        &copy; {new Date().getFullYear()} Recipe Finder. All rights reserved.
      </p>

      {/* Contact Section Popup */}
      {isContactOpen && (
        <div className="pop-overlay">
          <div className="pop-content">
            <button onClick={closeModal} className="close-pop">
              &times; {/* Close button */}
            </button>
            <ContactSection closeModal={closeModal} />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
