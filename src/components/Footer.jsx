import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Facebook, Instagram, Heart, ArrowUp } from 'lucide-react';
import './css/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    {
      title: 'Quick Links',
      items: [
        { label: 'About Us', href: '/about' },
        { label: 'Initiatives', href: '#initiatives' },
        { label: 'Contact Us', href: '#contact' },
        { label: 'Donate', href: 'https://connecting-smiles-foundation.danamojo.org/' }
      ]
    },
    {
      title: 'Legal',
      items: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Use', href: '#' }
      ]
    }
  ];

  const locations = [
    {
      name: 'KR Puram',
      address: [
        '#353, 2nd Cross, Kuvempu Nagar',
        'Ramamurthy Nagar',
        'Bangalore – 560016'
      ]
    },
    {
      name: 'Koramangala',
      address: [
        '#204, 9th Main, 14th Cross',
        'Rajendranagar, Vivek Nagar',
        'Bangalore – 560047'
      ]
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/p/Connecting-Smiles-Foundation-100078949540801/',
      label: 'Facebook'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/connectingsmilesfoundation/',
      label: 'Instagram'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: 'info@connectingsmilesfoundation.org'
    },
    {
      icon: Phone,
      text: '+91 72047 40835'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container container">
        <motion.div
          className="footer-main-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand Section */}
          <motion.div className="footer-brand-section" variants={itemVariants}>
            <h4 className="footer-brand">
              <span className="brand-accent">CONNECTING</span> SMILES FOUNDATION
            </h4>
            <p className="footer-tagline">
              Empowering communities through education, healthcare, and compassion.
            </p>
            
            {/* Contact Info */}
            <div className="footer-contact-info">
              {contactInfo.map((contact, idx) => {
                const IconComponent = contact.icon;
                return (
                  <motion.a
                    key={idx}
                    href={contact.icon === Mail ? `mailto:${contact.text}` : `tel:${contact.text}`}
                    className="footer-contact-item"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    aria-label={`${contact.icon === Mail ? 'Email' : 'Call'} us at ${contact.text}`}
                  >
                    <IconComponent size={18} aria-hidden="true" />
                    <span>{contact.text}</span>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Icons */}
            <div className="footer-social-icons">
              {socialLinks.map((social, idx) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="footer-social-link"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <IconComponent size={20} aria-hidden="true" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Locations Section */}
          <motion.div className="footer-locations" variants={itemVariants} role="region" aria-labelledby="locations-heading">
            <h6 id="locations-heading" className="footer-section-title">Our Locations</h6>
            <div className="location-flex">
              {locations.map((location, idx) => (
                <motion.div
                  key={idx}
                  className="location-item"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="location-header">
                    <div className="location-icon-wrapper" aria-hidden="true">
                      <MapPin size={18} />
                    </div>
                    <strong>{location.name}</strong>
                  </div>
                  {location.address.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, idx) => (
            <motion.nav key={idx} className="footer-links-section" variants={itemVariants} role="navigation" aria-labelledby={`footer-${section.title.toLowerCase().replace(' ', '-')}`}>
              <h6 id={`footer-${section.title.toLowerCase().replace(' ', '-')}`} className="footer-section-title">{section.title}</h6>
              <ul>
                {section.items.map((item, i) => (
                  <li key={i}>
                    <motion.a
                      href={item.href}
                      whileHover={{ x: 5, color: '#FFBF00' }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          ))}
        </motion.div>
      </div>

      {/* Bottom strip */}
      <div className="footer-bottom-strip">
        <div className="footer-bottom-content">
          <p>
            <Heart size={14} className="footer-heart" />
            &copy; {new Date().getFullYear()} Connecting Smiles Foundation. All rights reserved.
          </p>
          <motion.button
            className="scroll-to-top"
            onClick={scrollToTop}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                scrollToTop();
              }
            }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top of page"
          >
            <ArrowUp size={20} aria-hidden="true" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
