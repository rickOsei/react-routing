import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavBars() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto links">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Services">Services</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBars;
