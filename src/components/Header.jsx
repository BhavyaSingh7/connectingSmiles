// src/Header.jsx
import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./css/Header.css"

const Header = () => {
  const location = useLocation();

  const getActiveClass = (path) => {
    if (location.pathname === path) {
      if (path === '/locations') {
        return 'nav-link-active-locations';
      } else if (path === '/contactus') {
        return 'nav-link-active-contact';
      } else {
        return 'nav-link-active'; // Default yellow for home and about
      }
    }
    return '';
  };

  return (
    <Navbar expand="lg" bg="light" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center">
          <img
            src="./logo.jpeg"
            alt="Connecting Smiles Logo"
            className="logo-img"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav className="text-uppercase fw-semibold">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={`px-3 ${getActiveClass('/')}`}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              className={`px-3 ${getActiveClass('/about')}`}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/locations" 
              className={`px-3 ${getActiveClass('/locations')}`}
            >
              Locations
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contactus" 
              className={`px-3 ${getActiveClass('/contactus')}`}
            >
              Contact
            </Nav.Link>
          </Nav>
          <div className="ms-2"> {/* Small margin to separate slightly */}
            <Button
              variant="dark"
              className="text-uppercase px-4 py-2"
              onClick={() => {
                 window.open(
                    "https://connecting-smiles-foundation.danamojo.org/",
                    "_blank",
                    "noopener,noreferrer"
                 );
              }}
            >
              Donate
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
