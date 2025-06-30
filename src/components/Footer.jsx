import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave"></div>
      <div className="container footer-content d-flex justify-content-between align-items-start flex-wrap">

        {/* Left Side: Title + Socials */}
        <div className="footer-left">
          <h5 className="footer-title">CONNECTING SMILES</h5>
          <div className="footer-icons mt-3">
            <a
              href="https://www.facebook.com/p/Connecting-Smiles-Foundation-100078949540801/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/connectingsmilesfoundation/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Side: Address Block */}
        <div className="footer-right text-end">
          <h6 className="fw-bold mb-3">Our Centres</h6>
          <div className="footer-address-row d-flex justify-content-end">
            <div className="address-block me-4">
              <strong>KR Puram</strong><br />
              #353, 2nd Cross, Kuvempu Nagar,<br />
              Ramamurthy Nagar,<br />
              Bangalore – 560016
            </div>
            <div className="address-block">
              <strong>Koramangala</strong><br />
              #204, 9th Main, 14th Cross,<br />
              Rajendranagar, Vivek Nagar,<br />
              Bangalore – 560047
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
