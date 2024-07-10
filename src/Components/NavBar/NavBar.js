import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
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
  const homeTooltip = (props) => <Tooltip {...props}>Home</Tooltip>;
  const aboutTooltip = (props) => <Tooltip {...props}>About</Tooltip>;
  const resumeTooltip = (props) => <Tooltip {...props}>Resume</Tooltip>;
  const servicesTooltip = (props) => <Tooltip {...props}>Services</Tooltip>;
  const skillsTooltip = (props) => <Tooltip {...props}>Skills</Tooltip>;
  const portfolioTooltip = (props) => <Tooltip {...props}>Portfolio</Tooltip>;
  const testimonialsTooltip = (props) => (
    <Tooltip {...props}>Testimonials</Tooltip>
  );
  const contactTooltip = (props) => <Tooltip {...props}>Contact</Tooltip>;

  return (
    <>
      <Navbar expand="lg" className="">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#intro">
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={homeTooltip}
                >
                  <Button variant="primary">
                    <IoHomeOutline />
                  </Button>
                </OverlayTrigger>
              </Nav.Link>
              <Nav.Link href="#About">
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={aboutTooltip}
                >
                  <Button variant="primary">
                    <LuUser2 />
                  </Button>
                </OverlayTrigger>
              </Nav.Link>
              <Nav.Link href="#Resume">
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={resumeTooltip}
                >
                  <Button variant="primary">
                    <IoBriefcaseOutline />
                  </Button>
                </OverlayTrigger>
              </Nav.Link>
              <Nav.Link href="#Services">
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={servicesTooltip}
                >
                  <Button variant="primary">
                    <LiaStreamSolid />
                  </Button>
                </OverlayTrigger>
              </Nav.Link>
              <Nav.Link href="#Skills">
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={skillsTooltip}
                >
                  <Button variant="primary">
                    <LuShapes />
                  </Button>
                </OverlayTrigger>
              </Nav.Link>
              <Nav.Link href="#Portfolio">
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={portfolioTooltip}
                >
                  <Button variant="primary">
                    <IoGridOutline />
                  </Button>
                </OverlayTrigger>
              </Nav.Link>
              <Nav.Link href="#Testimonial">
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={testimonialsTooltip}
                >
                  <Button variant="primary">
                    <AiOutlineComment />
                  </Button>
                </OverlayTrigger>
              </Nav.Link>
              <Nav.Link href="#Contact">
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={contactTooltip}
                >
                  <Button variant="primary">
                    <HiOutlineMailOpen />
                  </Button>
                </OverlayTrigger>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
