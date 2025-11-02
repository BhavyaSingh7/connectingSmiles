import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Heart, GraduationCap, UtensilsCrossed, ArrowRight } from "lucide-react";
import "./css/Initiatives.css";

const BASE_URL = import.meta.env.BASE_URL;

const initiativesData = [
  {
    title: "Pehel",
    subtitle: "Give wings to your dreams",
    description: "Pehel, a flagship program of Connecting Smiles Foundation (CSF), empowers women through high-quality vocational training, mentorship, and economic opportunities.",
    image: `${BASE_URL}cs-1.jpeg`,
    icon: GraduationCap,
    color: "#FFBF00"
  },
  {
    title: "Neev",
    subtitle: "Foundation for a brighter future",
    description: "Neev empowers small orphanages through nutrition, education, and a path to sustainability. We adopt orphanages and provide for their food, nutritional needs, and education.",
    image: `${BASE_URL}cs-2b.jpeg`,
    icon: Heart,
    color: "#FF6B6B"
  },
  {
    title: "Each One Feed One",
    subtitle: "No one should sleep hungry",
    description: "Each One Feed One is our initiative to ensure no one goes hungry by providing meals and support to those who need it most. We believe everyone deserves a full meal.",
    image: `${BASE_URL}cs-3c.jpeg`,
    icon: UtensilsCrossed,
    color: "#4ECDC4"
  }
];

const Initiatives = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0,
        delayChildren: 0
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const handleLearnMore = () => {
    window.open(
      "https://connecting-smiles-foundation.danamojo.org/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section aria-labelledby="initiatives-heading">
      <Container className="py-5 initiative-container" id="initiatives" role="region" aria-label="Our Initiatives">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-5"
      >
        <h2 id="initiatives-heading" className="initiative-section-title mb-3">Our Initiatives</h2>
        <p className="initiative-section-subtitle">
          Empowering communities, transforming lives, one initiative at a time
        </p>
        <div className="initiative-title-underline"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
      <Row className="g-4">
          {initiativesData.map((item, idx) => {
            const IconComponent = item.icon;
            return (
          <Col xl={4} lg={4} md={6} sm={12} className="d-flex" key={idx}>
                <motion.div
                  variants={cardVariants}
                  className="w-100"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="border-0 initiative-card w-100 h-100">
                    <div className="initiative-img-container">
                      <Card.Img 
                        variant="top" 
                        src={item.image} 
                        className="initiative-img" 
                        alt={`${item.title} - ${item.subtitle}`}
                        loading={idx === 0 ? "eager" : "lazy"}
                        decoding="async"
                      />
                      <div className="initiative-img-overlay"></div>
                      <div className="initiative-icon-wrapper">
                        <IconComponent size={32} color="#fff" strokeWidth={2} />
                      </div>
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <div className="mb-2">
                        <Card.Title className="initiative-card-title">
                          {item.title}
                        </Card.Title>
                        <p className="initiative-card-subtitle">{item.subtitle}</p>
                      </div>
                      <Card.Text className="initiative-card-text flex-grow-1">
                        {item.description}
                      </Card.Text>
                      <Button
                        variant="outline-primary"
                        className="initiative-learn-more-btn mt-3"
                        onClick={handleLearnMore}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleLearnMore();
                          }
                        }}
                        aria-label={`Learn more about ${item.title} initiative`}
                      >
                        Learn More
                        <ArrowRight size={16} className="ms-2" aria-hidden="true" />
                      </Button>
              </Card.Body>
            </Card>
                </motion.div>
          </Col>
            );
          })}
      </Row>
      </motion.div>
      </Container>
    </section>
  );
};

export default Initiatives;
