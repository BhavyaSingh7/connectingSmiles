import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { motion } from "framer-motion"; // Import motion
import "./css/DonateSection.css";

const carouselImages = [
  {
    src: "./cs-1.jpeg",
    alt: "First slide",
    caption: "Pehel – Give wings to your dreams",
    description:
      "Pehel, a flagship program of Connecting Smiles Foundation (CSF), empowers women through high-quality vocational training, mentorship, and economic opportunities.",
  },
  {
    src: "./cs-2a.jpeg",
    alt: "Second slide",
    caption: "Neev – Foundation for a brighter future",
    description: "Our Neev program is the first step towards sustainability, where we adopt small orphanages and provide for their food and nutritional needs, as well as their education",
  },
  {
    src: "/banner3.png",
    alt: "Third slide",
    caption: "Bright Futures",
    description: "Supporting underprivileged youth with skills and job readiness programs.",
  },
];

const DonateSection = () => {
  return (
    <>
      <Carousel fade interval={5000} className="donate-carousel">
        {carouselImages.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-image-wrapper">
              <img
                className="d-block w-100 carousel-img"
                src={item.src}
                alt={item.alt}
              />
            </div>
            <Carousel.Caption className="carousel-caption-custom animate__animated animate__fadeInUp">
              <h3>{item.caption}</h3>
              <p>{item.description}</p>
              <Button variant="light" className="learn-more-button">
                Learn More
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Full-width animated CTA section */}
      {/* Wavy Top */}
      <div className="wave wave-top">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,58 C480,160 960,0 1440,96 L1440,0 L0,0 Z" fill="#FFBF00" />
        </svg>
      </div>

      {/* CTA Section */}
      <motion.div
        className="cta-section text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="mb-4">Be a Part of the Change</h3>
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          DONATE FOR THE CAUSE
        </motion.button>
        <p className="mt-4 fs-6 text-muted">
          Every contribution helps us bring a smile and hope to those in need.
        </p>
      </motion.div>

      {/* Wavy Bottom */}
      <div className="wave wave-bottom">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,96 C480,0 960,160 1440,32 L1440,100 L0,100 Z" fill="#FFBF00" />
        </svg>
      </div>

    </>
  );
};

export default DonateSection;
