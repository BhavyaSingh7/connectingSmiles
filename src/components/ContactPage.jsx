import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Facebook, Instagram, Send, CheckCircle, MessageCircle } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import emailjs from '@emailjs/browser';
import "./css/ContactPage.css";

const ContactPage = () => {
  const formRef = React.useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setShowSuccess(false);
    setShowError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);
    setShowError(false);

    emailjs.sendForm(
      'service_f97utfa',
      'template_ghipiw3',
      formRef.current,
      '4mz_yrfVx47TVr_QK'
    ).then(
      (result) => {
        console.log('SUCCESS!', result.text);
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      },
      (error) => {
        console.log('FAILED...', error.text);
        setIsSubmitting(false);
        setShowError(true);
      }
    );
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Locations",
      details: [
        "#353, 2nd Cross, Kuvempu Nagar, Ramamurthy Nagar, Bangalore – 560016",
        "#204, 9th Main, 14th Cross, Rajendranagar, Vivek Nagar, Bangalore – 560047"
      ],
      link: "/locations"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@connectingsmilesfoundation.org"],
      link: "mailto:info@connectingsmilesfoundation.org"
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+91 72047 40835"],
      link: "tel:+917204740835"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM"]
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/p/Connecting-Smiles-Foundation-100078949540801/",
      label: "Facebook"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/connectingsmilesfoundation/",
      label: "Instagram"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="contact-page">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="contact-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="hero-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </motion.div>
      </motion.section>

      {/* Contact Form and Info Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <motion.div
              className="contact-info-section"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={itemVariants}>
                <h2>Contact Information</h2>
                <p className="contact-subtitle">
                  Get in touch with us through any of these channels. We're here to help!
                </p>
              </motion.div>

              <div className="contact-details">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const Component = info.link ? motion.a : motion.div;
                  const props = info.link ? {
                    href: info.link,
                    ...(info.link.startsWith('/') ? {} : { target: '_blank', rel: 'noopener noreferrer' })
                  } : {};
                  
                  return (
                    <Component
                      key={index}
                      className="contact-item"
                      variants={itemVariants}
                      whileHover={{ y: -3, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      {...props}
                    >
                      <div className="contact-icon">
                        <IconComponent size={24} />
                      </div>
                      <div className="contact-text">
                        <h4>{info.title}</h4>
                        {info.details.map((detail, i) => (
                          <p key={i}>{detail}</p>
                        ))}
                      </div>
                    </Component>
                  );
                })}
              </div>

              {/* Social Media */}
              <motion.div
                className="social-media"
                variants={itemVariants}
              >
                <h4>Follow Us</h4>
                <div className="social-icons">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        aria-label={social.label}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <IconComponent size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="contact-form-section"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="form-container">
                <h2>Send Us a Message</h2>
                <p className="form-subtitle">
                  Have a question or want to volunteer? We'd love to hear from you!
                </p>

                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <Alert variant="success" className="contact-alert">
                      <CheckCircle size={20} className="me-2" />
                      Thank you for your message! We'll get back to you soon.
                    </Alert>
                  </motion.div>
                )}

                {showError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <Alert variant="danger" className="contact-alert">
                      Failed to send message. Please try again or contact us directly.
                    </Alert>
                  </motion.div>
                )}

                <Form ref={formRef} onSubmit={handleSubmit} className="contact-form">
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

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="me-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </Form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="map-header"
          >
            <h2>Find Us on the Map</h2>
            <p>Visit us at our locations across Bangalore</p>
          </motion.div>
          <motion.div
            className="map-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0859554227817!2d77.62766!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14f2a8e3f5f7%3A0x1234567890abcdef!2sKR%20Puram%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Connecting Smiles Foundation Locations"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="faq-header"
          >
            <MessageCircle size={32} className="mb-3" color="#FFBF00" />
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </motion.div>
          <motion.div
            className="faq-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                question: "How can I volunteer with Connecting Smiles?",
                answer: "You can volunteer by filling out our contact form above or calling us directly. We have various volunteer opportunities available."
              },
              {
                question: "What types of donations do you accept?",
                answer: "We accept monetary donations through our DanaMojo platform, as well as educational materials, clothing, and other essential items."
              },
              {
                question: "How can I partner with your organization?",
                answer: "We welcome partnerships with businesses, schools, and other organizations. Please contact us to discuss collaboration opportunities."
              },
              {
                question: "Do you provide tax receipts for donations?",
                answer: "Yes, we provide proper tax receipts for all donations. You'll receive a receipt after your donation is processed."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="faq-item"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;