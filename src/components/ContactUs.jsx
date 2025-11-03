import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { MapPin, Mail, Phone, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import "./css/ContactUs.css";
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Hide alerts when user starts typing
    setShowSuccess(false);
    setShowError(false);
  };

  const sendEmail = (e) => {
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
        setFormData({ name: '', email: '', message: '' });
        // Scroll to top of form to show success message
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      title: "Our Locations",
      details: ["KR Puram", "Koramangala"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@connectingsmilesfoundation.org"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 72047 40835"]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        type: "tween"
      }
    }
  };

  return (
    <section className="contact-wrapper" id="contact" aria-labelledby="contact-heading" role="region">
      <div className="contact-container">
        <motion.div
          className="contact-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={cardVariants}
        >
          <h4 className="contact-card-title">Get in Touch</h4>
          <p className="contact-card-subtitle">We'd love to hear from you</p>
          <div className="contact-info">
            {contactInfo.map((info, idx) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={idx}
                  className="contact-info-item"
                  whileHover={{ x: 5 }}
                  transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
                >
                  <div className="contact-info-icon" aria-hidden="true">
                    <IconComponent size={20} />
                  </div>
                  <div className="contact-info-content">
                    <p className="contact-info-title">{info.title}</p>
                    {info.details.map((detail, i) => (
                      <p key={i} className="contact-info-detail" aria-label={`${info.title}: ${detail}`}>{detail}</p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="contact-form-panel"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact-form-header">
            <h3 className="contact-form-title">Join Us to Make the Change</h3>
            <p className="contact-form-subtitle">Feel free to drop us a line below!</p>
          </div>

          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <Alert variant="success" className="contact-alert">
                <CheckCircle size={20} className="me-2" />
                Message sent successfully! We'll get back to you soon.
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

          <Form ref={formRef} onSubmit={sendEmail} className="contact-form">
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Form.Label htmlFor="contact-name" className="visually-hidden">Your Name</Form.Label>
              <Form.Control
                id="contact-name"
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact-input mb-3"
                required
                aria-label="Your full name"
                aria-required="true"
              />
            </motion.div>

            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Form.Label htmlFor="contact-email" className="visually-hidden">Your Email</Form.Label>
              <Form.Control
                id="contact-email"
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact-input mb-3"
                required
                aria-label="Your email address"
                aria-required="true"
              />
            </motion.div>

            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Form.Label htmlFor="contact-message" className="visually-hidden">Your Message</Form.Label>
              <Form.Control
                id="contact-message"
                as="textarea"
                name="message"
                rows={5}
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleChange}
                className="contact-textarea mb-4"
                required
                aria-label="Your message"
                aria-required="true"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                className="send-btn"
                disabled={isSubmitting}
                aria-label={isSubmitting ? "Sending your message..." : "Send message to Connecting Smiles Foundation"}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="ms-2" />
                  </>
                )}
              </Button>
            </motion.div>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
