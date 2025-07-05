import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container container">
        {/* Left section */}
        <div className="footer-left">
          <h4 className="footer-brand">CONNECTING SMILES</h4>
          <p className="footer-tagline">
            Empowering communities through education, healthcare and compassion.
          </p>
          <div className="footer-social-icons">
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

        <div className="footer-links">
          <h6>Our Locations</h6>
             <ul>
                <li>
                <strong>KR Puram</strong><br />
                #353, 2nd Cross, Kuvempu Nagar,<br />
                              Ramamurthy Nagar,<br />
                              Bangalore – 560016
                </li>
                 <li>
                 <strong>Koramangala</strong><br />
                 #204, 9th Main, 14th Cross,<br />
                               Rajendranagar, Vivek Nagar,<br />
                               Bangalore – 560047
                 </li>
             </ul>
        </div>

        {/* Right - Legal */}
        <div className="footer-legal">
          <h6>Legal</h6>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="footer-bottom-strip">
        <p>&copy; {new Date().getFullYear()} Connecting Smiles Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
