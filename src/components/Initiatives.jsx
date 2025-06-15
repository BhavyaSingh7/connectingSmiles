import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./css/Initiatives.css";

const initiativesData = [
  {
    title: "HEADING-1",
    description: "Description",
    image: "/img1.jpg"
  },
  {
    title: "HEADING-2",
    description: "Description",
    image: "/img2.jpg"
  },
  {
    title: "Heading-3",
    description: "Description",
    image: "/img3.jpg"
  }
];

const Initiatives = () => {
  return (
    <Container className="py-5">
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
