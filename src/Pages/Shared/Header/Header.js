import React from 'react';
import logo from "../../../images/logo2.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
      <div>
        <Navbar bg="light" expand="md">
          <Container>
            <Navbar.Brand href="#home">
              <img alt="" src={logo} width="150" height="40" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavLink to="">
                  <i className="fas fa-shopping-cart text-danger me-4"></i>
                </NavLink>
                <NavLink
                  to="/dashboard"
                  className="text-decoration-none text-danger me-4"
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/login"
                  className="text-decoration-none text-danger me-4"
                >
                  Login
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;


//  <NavLink to="/register">
//   <Button
//     variant="danger"
//     className="text-decoration-none rounded-pill btn-sm pt-0"
//   >
//     Register
//   </Button>
// </NavLink>; 