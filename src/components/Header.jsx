// src/Header.jsx
import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./css/Header.css"

const Header = () => {
  return (
    <Navbar expand="lg" bg="light" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#" className="fw-bold">
          CONNECTING SMILES
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav className="text-uppercase fw-semibold">
            <Nav.Link href="#about" className="px-3">About</Nav.Link>
            <Nav.Link href="#locations" className="px-3">Locations</Nav.Link>
            <Nav.Link href="#contact" className="px-3">Contact</Nav.Link>
          </Nav>
          <div className="ms-2"> {/* Small margin to separate slightly */}
            <Button variant="dark" className="text-uppercase px-4 py-2">
              Donate
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
