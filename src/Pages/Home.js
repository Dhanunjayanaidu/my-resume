import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import "./Home.scss";
import About from "./About/About";
import Intro from "./Intro/Intro";
import Resume from "./Resume/Resume";
import Services from "./Services/Services";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Testimonial from "./Testimonial/Testimonial";
import Contact from "./Contact/Contact";
import Sidebar from "./Sidebar/Sidebar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Container fluid>
        <Row>
          <Col sm={12} md={3} lg={3} className="p-4">
            <Sidebar />
          </Col>
          <Col sm={12} md={9} lg={9} className="px-0">
            <div className="rightPanel" id="Home">
              <Intro />

              <About />

              <Resume />

              <Services />

              <Skills />

              <Portfolio />

              <Testimonial />

              <Contact />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
