import React, { useMemo, useRef, useEffect, useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import "./css/DonateSection.css";

const BASE_URL = import.meta.env.BASE_URL;

const carouselImages = [
  {
    images: [`${BASE_URL}cs-1.jpeg`, `${BASE_URL}cs-1b.jpeg`],
    alt: "Pehel",
    caption: "Pehel – Give wings to your dreams",
    description:
      "Pehel, a flagship program of Connecting Smiles Foundation (CSF), empowers women through high-quality vocational training, mentorship, and economic opportunities.",
  },
  {
    images: [`${BASE_URL}cs-2a.jpeg`, `${BASE_URL}cs-2b.jpeg`],
    alt: "Neev",
    caption: "Neev – Foundation for a brighter future",
    description:
      "Our Neev program is the first step towards sustainability, where we adopt small orphanages and provide for their food and nutritional needs, as well as their education",
  },
  {
    images: [`${BASE_URL}cs-3a.jpeg`, `${BASE_URL}cs-3b.jpeg`],
    alt: "Each One Feed One",
    caption: "Each One Feed One - No one should sleep hungry",
    description:
      "We believe that everyone deserves to have a full meal on their plate. By supporting our Each One Feed One program, you help provide meals and support to those who need it most.",
  },
];

const DonateSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nestedImageIndex, setNestedImageIndex] = useState(0);
  const nestedCarouselRefs = useRef([]);
  const mainCarouselRef = useRef(null);
  const timerRef = useRef(null);

  const handleDonateClick = () => {
    window.open(
      "https://connecting-smiles-foundation.danamojo.org/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  // Control carousel timing: show image 1, then image 2, then next slide
  useEffect(() => {
    // Reset to first image when slide changes
    setNestedImageIndex(0);

    // After 3 seconds, switch to second image
    const image2Timer = setTimeout(() => {
      setNestedImageIndex(1);
    }, 3000);

    // After 5 seconds total from slide load, advance to next slide
    const nextSlideTimer = setTimeout(() => {
      const nextSlide = (currentSlide + 1) % carouselImages.length;
      setCurrentSlide(nextSlide);
      setNestedImageIndex(0); // Reset for next slide
    }, 5000);

    return () => {
      clearTimeout(image2Timer);
      clearTimeout(nextSlideTimer);
    };
  }, [currentSlide]);

  const carouselItems = useMemo(
    () =>
      carouselImages.map((item, index) => (
        <Carousel.Item key={`carousel-item-${index}`}>
          <div className="carousel-image-wrapper">
            <div
              ref={(el) => {
                if (el) nestedCarouselRefs.current[index] = el;
              }}
              className="nested-carousel-wrapper"
            >
              <Carousel
                controls={false}
                indicators={false}
                fade
                pause={true}
                ride={false}
                interval={null}
                activeIndex={currentSlide === index ? nestedImageIndex : 0}
                onSelect={(selectedIndex) => {
                  if (currentSlide === index) {
                    setNestedImageIndex(selectedIndex);
                  }
                }}
              >
                {item.images.map((img, idx) => (
                  <Carousel.Item 
                    key={`nested-img-${index}-${idx}`}
                  >
                    <picture>
                      <img
                        className="d-block w-100 carousel-img"
                        src={img}
                        alt={`${item.alt} initiative - image ${idx + 1}`}
                        loading={index === 0 && idx === 0 ? "eager" : "lazy"}
                        decoding="async"
                        aria-hidden={idx === 0 ? "false" : "true"}
                      />
                    </picture>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>

          <Carousel.Caption className="carousel-caption-custom" role="region" aria-label={`${item.caption} information`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>{item.caption}</h3>
              <p>{item.description}</p>
              <Button
                variant="light"
                className="learn-more-button"
                onClick={handleDonateClick}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleDonateClick();
                  }
                }}
                aria-label={`Learn more about ${item.alt} initiative and donate`}
              >
                Learn More
              </Button>
            </motion.div>
          </Carousel.Caption>
        </Carousel.Item>
      )),
    [currentSlide, nestedImageIndex, handleDonateClick]
  );

  return (
    <>
      <section aria-label="Initiatives carousel" role="region">
        <Carousel
          ref={mainCarouselRef}
          fade
          aria-label="Our Initiatives"
          role="region"
        interval={null}
        className="donate-carousel"
        indicators={true}
        controls={true}
        pause={true}
        activeIndex={currentSlide}
        onSelect={(selectedIndex) => setCurrentSlide(selectedIndex)}
      >
        {carouselItems}
        </Carousel>
      </section>

      {/* Wavy Top */}
      <div className="wave wave-top">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,58 C480,160 960,0 1440,96 L1440,0 L0,0 Z" fill="#FFBF00" />
        </svg>
      </div>

      {/* CTA Section */}
      <motion.section
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
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={handleDonateClick}
          aria-label="Donate to Connecting Smiles Foundation"
        >
          DONATE FOR THE CAUSE
        </motion.button>

        <p className="mt-4 fs-6 text-muted">
          Every contribution helps us bring a smile and hope to those in need.
        </p>
      </motion.section>

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
