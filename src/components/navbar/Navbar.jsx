import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const EdufreeNavbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const isAuthenticated = localStorage.getItem("auth");
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#1C1E53", paddingTop: "20px" }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#" className="fw-bold text-white">
          [EDUFREE]
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-white">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/allcourses" className="text-white">
              KURSUS
            </Nav.Link>
            <Nav.Link as={Link} to="/allblogs" className="text-white">
              BLOG{" "}
              <i
                className="bi bi-box-arrow-up-right"
                style={{ fontSize: "14px" }}
              ></i>
            </Nav.Link>
          </Nav>
          {isAuthenticated ? (
            <div className="d-flex align-items-center ms-3 text-white ms-5">
              <Nav.Link as={Link} to="/myaccount" className="text-white">
                <span>Hi, {user?.name || "User"}</span>
              </Nav.Link>
            </div>
          ) : (
            <Button as={Link} to="/login" variant="outline-light" className="ms-3 py-2 px-4">
              Login
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default EdufreeNavbar;
