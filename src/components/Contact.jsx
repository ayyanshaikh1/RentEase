import React from "react";
import { Link } from "react-router-dom";
import "./contact.css"; // Import your styles
const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Owner</h1>
      <p>📞 Mobile Number: <strong>+91 9022609868</strong></p>
      <p>📧 Email: <strong>ayyansk1110@gmail.com</strong></p>
      <Link to="/" className="back-btn">⬅ Go Back</Link>
    </div>
  );
};

export default Contact;
