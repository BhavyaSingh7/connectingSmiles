import React from "react";
import { Container, Button, Carousel } from "react-bootstrap";
import "./css/DonateSection.css";

// Array of image data (you can also add captions or descriptions here)
const carouselImages = [
  {
    src: "/banner1.png",
    alt: "First slide"
  },
  {
    src: "/banner2.png",
    alt: "Second slide"
  },
  {
    src: "/banner3.png",
    alt: "Third slide"
  }
];

const DonateSection = () => {
  return (
    <>
      {/* Dynamic Carousel */}
      <Carousel fade interval={4000} className="donate-carousel">
        {carouselImages.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 carousel-img"
              src={item.src}
              alt={item.alt}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* CTA Section */}
      <Container className="text-center py-5">
        <Button variant="dark" className="px-4 py-3 text-uppercase fw-semibold">
          Donate For The Cause
        </Button>
        <p className="mt-4 fs-6 text-muted">
          A description for the NGO and how it's contributing towards the society
        </p>
      </Container>
    </>
  );
};

export default DonateSection;
