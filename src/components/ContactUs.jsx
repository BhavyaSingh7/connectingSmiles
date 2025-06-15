import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./css/ContactUs.css";

const ContactUs = () => {
  return (
    <Container className="py-5 mt-5 contact-container">
      <Row className="align-items-center">
        <Col md={6} sm={12}>
          <h2 className="fw-bold">CONTACT US</h2>
          <p className="mb-4 subheading">Subheading</p>
          <Form className="p-4 shadow-sm rounded bg-light">
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Value" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control type="text" placeholder="Value" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Value" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Value" />
            </Form.Group>

            <Button variant="dark" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Col>

        <Col md={6} sm={12} className="mt-4 mt-md-0 text-center">
          <img
            src="/contact-img.jpg"
            alt="Contact Visual"
            className="img-fluid rounded"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
