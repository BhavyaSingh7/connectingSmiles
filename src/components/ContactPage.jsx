import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";
import "./css/ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setShowAlert(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div className="contact-page">
      <Header />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info-section">
              <h2>Contact Information</h2>
              <p className="contact-subtitle">
                Get in touch with us through any of these channels. We're here to help!
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <h4>Office Address</h4>
                    <p>KR Puram, Koramangla<br />Bangalore, Karnataka, India</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <h4>Email Address</h4>
                    <p>info@connectingsmilesfoundation.org</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="contact-text">
                    <h4>Phone Number</h4>
                    <p>+91 72047 40835</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaClock />
                  </div>
                  <div className="contact-text">
                    <h4>Working Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="social-media">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon"><FaFacebook /></a>
                  <a href="#" className="social-icon"><FaTwitter /></a>
                  <a href="#" className="social-icon"><FaInstagram /></a>
                  <a href="#" className="social-icon"><FaLinkedin /></a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-container">
                <h2>Send Us a Message</h2>
                <p className="form-subtitle">
                  Have a question or want to volunteer? We'd love to hear from you!
                </p>

                {showAlert && (
                  <Alert variant="success" className="mb-4">
                    Thank you for your message! We'll get back to you soon.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <Form.Label>Your Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <Form.Label>Email Address *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <Form.Label>Subject *</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What is this message about?"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      required
                    />
                  </div>

                  <Button type="submit" className="submit-btn">
                    Send Message
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0859554227817!2d77.62766!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14f2a8e3f5f7%3A0x1234567890abcdef!2sKR%20Puram%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How can I volunteer with Connecting Smiles?</h4>
              <p>You can volunteer by filling out our contact form above or calling us directly. We have various volunteer opportunities available.</p>
            </div>
            <div className="faq-item">
              <h4>What types of donations do you accept?</h4>
              <p>We accept monetary donations through our DanaMojo platform, as well as educational materials, clothing, and other essential items.</p>
            </div>
            <div className="faq-item">
              <h4>How can I partner with your organization?</h4>
              <p>We welcome partnerships with businesses, schools, and other organizations. Please contact us to discuss collaboration opportunities.</p>
            </div>
            <div className="faq-item">
              <h4>Do you provide tax receipts for donations?</h4>
              <p>Yes, we provide proper tax receipts for all donations. You'll receive a receipt after your donation is processed.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;