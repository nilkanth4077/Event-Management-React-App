import React from "react";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css"; // Create and import a CSS file for custom styles

export const Navigation = () => {
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="sm"
        className="navbar-custom"
      >
        <div className="container-fluid">
          <NavLink as={Link} to="/"><h2 className="mx-5">EMS</h2></NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto mx-5">
              <NavLink
                eventKey="1"
                as={Link}
                className="nav-link-custom"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                eventKey="2"
                as={Link}
                className="nav-link-custom"
                to="/signup"
              >
                Signup
              </NavLink>
              <NavLink
                eventKey="3"
                as={Link}
                className="nav-link-custom"
                to="/login"
              >
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};
