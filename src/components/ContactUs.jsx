import React from "react";
import { Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./css/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-card">
          <h4>Contact Us</h4>
          <div className="contact-info">
            <p><FaMapMarkerAlt className="icon" /> KR Puram <br /> Koramangla </p>
            <p><FaEnvelope className="icon" /> info@connectingsmilesfoundation.org </p>
            <p><FaPhoneAlt className="icon" /> +91 72047 40835</p>
          </div>
        </div>

        <div className="contact-form-panel">
          <h3>JOIN US TO MAKE THE CHANGE</h3>
          <p className="sub-text">Feel free to drop us a line below!</p>
          <Form className="contact-form">
            <Form.Control type="text" placeholder="Your Name" className="mb-3" />
            <Form.Control type="email" placeholder="Your Email" className="mb-3" />
            <Form.Control as="textarea" rows={4} placeholder="Typing your message here……" className="mb-4" />
            <Button variant="danger" type="submit" className="send-btn">Send</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
