import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Navigation, ExternalLink } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import "./css/Locations.css";

const locations = [
  {
    id: 1,
    name: "KR Puram",
    address: "#353, 2nd Cross, Kuvempu Nagar, Ramamurthy Nagar",
    city: "Bangalore – 560016",
    coordinates: "12.9716,77.62766"
  },
  {
    id: 2,
    name: "Koramangala",
    address: "#204, 9th Main, 14th Cross, Rajendranagar, Vivek Nagar",
    city: "Bangalore – 560047",
    coordinates: "12.9352,77.6245"
  }
];

const Locations = () => {
  const navigate = useNavigate();

  const openGoogleMaps = (coordinates) => {
    const url = `https://www.google.com/maps?q=${coordinates}&z=15&t=m`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleContact = () => {
    navigate("/contactus");
  };

  const handleCall = () => {
    window.open("tel:+917204740835", "_self");
  };

  const handleEmail = () => {
    window.open("mailto:info@connectingsmilesfoundation.org", "_self");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
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
    <div className="locations-page">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="locations-hero"
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
          <h1>Our Locations</h1>
          <p>
            Visit us at our offices across Bangalore. We're here to serve our communities with 
            education, healthcare, and compassion.
          </p>
        </motion.div>
      </motion.section>

      {/* Locations Section */}
      <section className="locations-main">
        <div className="container">
          <motion.div
            className="locations-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                className="location-card"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="location-header">
                  <div className="location-icon">
                    <MapPin size={28} />
                  </div>
                  <div className="location-title">
                    <h2>{location.name}</h2>
                  </div>
                </div>

                <div className="location-details">
                  <div className="detail-item">
                    <div className="detail-icon">
                      <MapPin size={18} />
                    </div>
                    <div className="detail-content">
                      <h4>Address</h4>
                      <p>{location.address}</p>
                      <p className="city">{location.city}</p>
                    </div>
                  </div>

                  <div className="contact-info-grid">
                    <motion.a
                      href="tel:+917204740835"
                      className="contact-action"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Phone size={18} />
                      <span>Call</span>
                    </motion.a>
                    <motion.a
                      href="mailto:info@connectingsmilesfoundation.org"
                      className="contact-action"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail size={18} />
                      <span>Email</span>
                    </motion.a>
                  </div>
                </div>

                <div className="location-actions">
                  <motion.button
                    className="directions-btn"
                    onClick={() => openGoogleMaps(location.coordinates)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label={`Get directions to ${location.name}`}
                  >
                    <Navigation size={18} />
                    <span>Get Directions</span>
                    <ExternalLink size={14} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
            <p>Both locations are easily accessible across Bangalore</p>
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

      {/* Contact CTA */}
      <motion.section
        className="contact-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2>Need Help Finding Us?</h2>
          <p>
            Have questions about our locations or need assistance? We're here to help.
          </p>
          <div className="cta-buttons">
            <motion.button
              className="cta-btn primary"
              onClick={handleContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
            <motion.button
              className="cta-btn secondary"
              onClick={handleCall}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Now
            </motion.button>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Locations;
