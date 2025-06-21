import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./css/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-wrapper">
      <div className="contact-us-bg">
        <h2 className="text-center text-white fw-bold pt-5">CONTACT US</h2>
        <p className="text-center text-white subheading">
        </p>
      </div>

      <Container className="form-section">
        <Form className="contact-form p-4 shadow-lg rounded-4 bg-white">
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formSurname">
            <Form.Label>Surname</Form.Label>
            <Form.Control type="text" placeholder="Enter your surname" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Write your message..." />
          </Form.Group>

          <Button variant="danger" type="submit" className="w-100 fw-semibold">
            Send Message
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default ContactUs;
