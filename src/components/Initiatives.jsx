import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./css/Initiatives.css";

const initiativesData = [
  {
    title: "Pehel",
    description: "Pehel, a flagship prgram of Connecting Smiles Foundation (CSF), empowers women.",
    image: "./cs-1.jpeg"
  },
  {
    title: "Neev",
    description: "Neev empowers small orphanages through nutrition, education, and a path to sustainability.",
    image: "./cs-2b.jpeg"
  },
  {
    title: "Each One Feed One",
    description: "Each One Feed One is our initiative to ensure no one goes hungry by providing meals to those in need.",
    image: "./cs-3c.jpeg"
  }
];

const Initiatives = () => {
  return (
    <Container className="py-5 initiative-container">
      <h2 className="mb-4 fw-bold">INITIATIVES</h2>
      <Row>
        {initiativesData.map((item, idx) => (
          <Col md={4} sm={12} className="mb-4" key={idx}>
            <Card className="border-0 initiative-card">
              <Card.Img variant="top" src={item.image} className="initiative-img" />
              <Card.Body>
                <Card.Title className="fw-semibold">{item.title}</Card.Title>
                <Card.Text className="text-muted">{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Initiatives;
