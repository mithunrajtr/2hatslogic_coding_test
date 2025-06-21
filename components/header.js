"use client";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../public/assets/images/logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="header">
      <Navbar expand="xl">
          <Navbar.Brand href="/" className="d-flex gap-2 align-items-center">
            <Image src={logo} className="img-fluid" alt="logo" />
            <h1 className="title m-0 pt-3">Hello World!</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "220px" }}
              navbarScroll
            >
              <Nav.Link href="/">Course</Nav.Link>
              <Nav.Link href="/">Info</Nav.Link>
              <Nav.Link href="/">Testimonial</Nav.Link>
              <Nav.Link href="/">Categories</Nav.Link>

            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
