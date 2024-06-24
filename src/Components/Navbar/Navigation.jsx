import React from "react";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between px-4 px-xl-5 bg-primary">
        <Navbar collapseOnSelect expand="sm" bg="primary">
          <Navbar.Toggle
            aria-controls="navbarScroll"  
            data-bs-target="#navbarScroll"
            className="text-white"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav>
              <NavLink eventKey="1" as={Link} className="text-white" to="/">
                Home
              </NavLink>
              <NavLink eventKey="2" as={Link} className="text-white" to="/signup">
                Signup
              </NavLink>
              <NavLink eventKey="3" as={Link} className="text-white" to="/login">
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};
