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

  const handleDonateClick = () => {
    window.open(
      "https://connecting-smiles-foundation.danamojo.org/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleKeyDown = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <Navbar 
      expand="lg" 
      bg="light" 
      fixed="top" 
      className="shadow-sm"
      role="banner"
      aria-label="Main navigation"
    >
      <Container>
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="fw-bold d-flex align-items-center"
          aria-label="Connecting Smiles Foundation - Home"
        >
          <img
            src={`${import.meta.env.BASE_URL}logo.jpeg`}
            alt="Connecting Smiles Foundation Logo"
            className="logo-img"
            loading="eager"
            width="160"
            height="48"
          />
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="main-navbar" 
          aria-label="Toggle navigation menu"
          aria-expanded="false"
        />

        <Navbar.Collapse id="main-navbar" className="justify-content-end" role="navigation" aria-label="Main menu">
          <Nav className="text-uppercase fw-semibold" role="menubar">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={`px-3 ${getActiveClass('/')}`}
              role="menuitem"
              aria-label="Navigate to Home page"
              aria-current={location.pathname === '/' ? 'page' : undefined}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              className={`px-3 ${getActiveClass('/about')}`}
              role="menuitem"
              aria-label="Navigate to About page"
              aria-current={location.pathname === '/about' ? 'page' : undefined}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/locations" 
              className={`px-3 ${getActiveClass('/locations')}`}
              role="menuitem"
              aria-label="Navigate to Locations page"
              aria-current={location.pathname === '/locations' ? 'page' : undefined}
            >
              Locations
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contactus" 
              className={`px-3 ${getActiveClass('/contactus')}`}
              role="menuitem"
              aria-label="Navigate to Contact page"
              aria-current={location.pathname === '/contactus' ? 'page' : undefined}
            >
              Contact
            </Nav.Link>
          </Nav>
          <div className="ms-2">
            <Button
              variant="dark"
              className="text-uppercase px-4 py-2"
              onClick={handleDonateClick}
              onKeyDown={(e) => handleKeyDown(e, handleDonateClick)}
              aria-label="Donate to Connecting Smiles Foundation"
              aria-describedby="donate-description"
            >
              Donate
            </Button>
            <span id="donate-description" className="visually-hidden">
              Opens donation page in a new window
            </span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
