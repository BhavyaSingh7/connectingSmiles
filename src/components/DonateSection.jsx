import React, { useEffect } from "react";
import { Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./css/DonateSection.css";

const carouselImages = [
  {
    images: ["./cs-1.jpeg", "./cs-1b.jpeg"],
    alt: "Pehel",
    caption: "Pehel – Give wings to your dreams",
    description:
      "Pehel, a flagship program of Connecting Smiles Foundation (CSF), empowers women through high-quality vocational training, mentorship, and economic opportunities.",
  },
  {
    images: ["./cs-2a.jpeg", "./cs-2b.jpeg"],
    alt: "Neev",
    caption: "Neev – Foundation for a brighter future",
    description:
      "Our Neev program is the first step towards sustainability, where we adopt small orphanages and provide for their food and nutritional needs, as well as their education",
  },
  {
    images: ["./cs-3a.jpeg", "./cs-3b.jpeg"],
    alt: "Each One Feed One",
    caption: "Each One Feed One - No one should sleep hungry",
    description:
      "We believe that everyone deserves to have a full meal on their plate. By supporting our Each One Feed One program, you help provide meals and support to those who need it most.",
  },
];

const DonateSection = () => {

  const navigate = useNavigate();
  return (
    <>
       <Carousel fade interval={6000} className="donate-carousel">
         {carouselImages.map((item, index) => (
           <Carousel.Item key={index}>
             <div className="carousel-image-wrapper">
               <Carousel controls={false} indicators={false} interval={4000}>
                 {item.images.map((img, idx) => (
                   <Carousel.Item key={idx}>
                     <img
                       className="d-block w-100 carousel-img"
                       src={img}
                       alt={`${item.alt} ${idx + 1}`}
                     />
                   </Carousel.Item>
                 ))}
               </Carousel>
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
           onClick={() => {
                 window.open(
                    "https://connecting-smiles-foundation.danamojo.org/",
                    "_blank",
                    "noopener,noreferrer"
                 );
              }}        >
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
      <div id="dmScriptContainer" style={{ display: "none", width: "100%" }}></div>
    </>
  );
};

export default DonateSection;
