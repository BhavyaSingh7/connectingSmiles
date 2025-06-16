import React from "react";
import { Container, Button, Carousel } from "react-bootstrap";
import "./css/DonateSection.css";

const carouselImages = [
  {
    src: "./public/cs-1.jpeg",
    alt: "First slide",
    caption: "Pehel – Give wings to your dreams",
    description: "Pehel, a flagship program of Connecting Smiles Foundation (CSF), empowers women through high-quality vocational training, mentorship, and economic opportunities."
  },
  {
    src: "/banner2.png",
    alt: "Second slide",
    caption: "Community Support",
    description: "Empowering local communities through education and health initiatives."
  },
  {
    src: "/banner3.png",
    alt: "Third slide",
    caption: "Bright Futures",
    description: "Supporting underprivileged youth with skills and job readiness programs."
  }
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
              <div className="carousel-gradient-overlay"></div>
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

      <Container className="text-center py-5 cta-section">
        <h3 className="mb-4">Be a Part of the Change</h3>
        <Button variant="dark" className="cta-button">
          DONATE FOR THE CAUSE
        </Button>
        <p className="mt-4 fs-6 text-muted">
          Every contribution helps us bring a smile and hope to those in need.
        </p>
      </Container>
    </>
  );
};

export default DonateSection;
