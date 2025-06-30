import React, { useEffect } from "react";
import { Button, Carousel } from "react-bootstrap";
import { motion } from "framer-motion"; // Import motion
import "./css/DonateSection.css";

const carouselImages = [
  {
    images: ["./cs-1.jpeg", "./cs-1b.jpeg"], // store in public/
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

   const handleDonateClick = () => {
     const container = document.getElementById("dmScriptContainer");
     if (!container) {
       return alert("Donation portal is not available right now.");
     }

     // Prevent duplicate iframes
     if (!container.querySelector("iframe")) {
       const iframe = document.createElement("iframe");
       iframe.src = `https://danamojo.org/dm/dmWidget.jsp?ngoId=982`;
       iframe.style.width = "100%";
       iframe.style.height = "700px";
       iframe.frameBorder = "0";
       iframe.scrolling = "no";
       container.appendChild(iframe);
     }
     container.style.display = "block";
     container.scrollIntoView({ behavior: "smooth" });
   };


  return (
    <>
       <Carousel fade interval={6000} className="donate-carousel">
              {carouselImages.map((item, index) => (
                <Carousel.Item key={index}>
                  <div className="carousel-image-wrapper">
                    <Carousel controls={true} indicators={true} interval={3000}>
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
          onClick={() => {
            const popupUrl = "https://danamojo.org/dm/dmWidget.jsp?ngo_id=982";
            window.open(
              popupUrl,
              "_blank",
              "noopener,noreferrer,width=500,height=700"
            );
          }}
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
      <div id="dmScriptContainer" style={{ display: "none", width: "100%" }}></div>
    </>
  );
};

export default DonateSection;
