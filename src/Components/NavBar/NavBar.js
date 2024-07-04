import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.scss";
import { IoHomeOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { IoBriefcaseOutline } from "react-icons/io5";
import { LiaStreamSolid } from "react-icons/lia";
import { LuShapes } from "react-icons/lu";
import { IoGridOutline } from "react-icons/io5";
import { AiOutlineComment } from "react-icons/ai";
import { HiOutlineMailOpen } from "react-icons/hi";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="">
        <Container>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <IoHomeOutline />
              </Nav.Link>
              <Nav.Link href="#link">
                <LuUser2 />
              </Nav.Link>
              <Nav.Link href="#link">
                <IoBriefcaseOutline />
              </Nav.Link>
              <Nav.Link href="#link">
                <LiaStreamSolid />
              </Nav.Link>
              <Nav.Link href="#link">
                <LuShapes />
              </Nav.Link>
              <Nav.Link href="#link">
                <IoGridOutline />
              </Nav.Link>
              <Nav.Link href="#link">
                <AiOutlineComment />
              </Nav.Link>
              <Nav.Link href="#link">
                <HiOutlineMailOpen />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
