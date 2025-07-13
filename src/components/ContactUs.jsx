import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./css/ContactUs.css";
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm(
        'service_f97utfa',
        'template_ghipiw3',
        formRef.current,
        '4mz_yrfVx47TVr_QK'
      ).then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Failed to send message.");
        }
      );
    };

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
          <Form ref={formRef} onSubmit={sendEmail} className="contact-form">
            <Form.Control type="text" placeholder="Your Name" name="name" className="mb-3" />
            <Form.Control type="email" placeholder="Your Email" name="email" className="mb-3" />
            <Form.Control as="textarea" name="message" rows={4} placeholder="Typing your message here……" className="mb-4" />
            <Button variant="danger" type="submit" className="send-btn">Send</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
