import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="border-top pt-5 pb-4 px-4 px-md-5 footer-design">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-3 mb-4">
            <h4 className="fw-bold">CONNECTING SMILES</h4>
            <div className="d-flex gap-3 mt-4">
              <a href="#"><FaFacebookF className="text-secondary fs-5" /></a>
              <a href="#"><FaLinkedinIn className="text-secondary fs-5" /></a>
              <a href="#"><FaYoutube className="text-secondary fs-5" /></a>
              <a href="#"><FaInstagram className="text-secondary fs-5" /></a>
            </div>
          </div>

          {/* Link Columns */}
          {[...Array(3)].map((_, i) => (
            <div key={i} className="col-6 col-md-3 mb-4">
              <h6 className="fw-bold mb-3">Topic</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="text-muted text-decoration-none d-block mb-2">Page</a></li>
                <li><a href="#" className="text-muted text-decoration-none d-block mb-2">Page</a></li>
                <li><a href="#" className="text-muted text-decoration-none d-block">Page</a></li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
