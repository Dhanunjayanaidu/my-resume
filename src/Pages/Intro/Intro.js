import React from "react";
import "./Intro.scss";
import { IoHomeOutline } from "react-icons/io5";
import TypeWriterEffect from "react-typewriter-effect";
import { Fade } from "react-reveal";

import dhanunjayStamp from "../../Images/dhanunjay-stamp.png";
import { Col, Row } from "react-bootstrap";

// const myRef = document.querySelector(".scrollable-div");

const Intro = () => {
  return (
    <>
      <section className="Intro" id="intro">
        <h6 class="subtitle">
          <IoHomeOutline /> Introduction
        </h6>
        <Fade bottom duration={3000}>
          <h5 className="mt-3">WELCOME TO MY WORLD</h5>
        </Fade>
        <Fade bottom duration={3000}>
          <h3 className="mainTitle">
            Hi👋, I'm <span className="fw-bold greenColor">Dhanunjay</span>
          </h3>
        </Fade>
        <Fade bottom duration={3000}>
          <h2>
            a{" "}
            <TypeWriterEffect
              startDelay={100}
              cursorColor="#28e98c"
              multiText={[
                "Frontend Developer.",
                "UI Designer.",
                "Graphic Designer.",
              ]}
              multiTextDelay={2000}
              typeSpeed={200}
              multiTextLoop={true}
            />
          </h2>
        </Fade>

        <Fade bottom duration={3000}>
          <p className="mt-4 d-none">
            I design and code beautifully simple things and i love what i do.
            Just simple like that! I design and code beautifully simple things
            and i love what i do. Just simple like that!
          </p>
          <p className="mt-4">
            As a frontend developer I can build the user interface and user
            experience of a website or web application using HTML, CSS,
            JavaScript, Bootstrap, Tailwind and frameworks like React & Angular.
            I am responsible for bringing design concepts to life, ensuring
            responsiveness, accessibility, and performance.
          </p>
        </Fade>

        <img
          src={dhanunjayStamp}
          alt="Dhanunjayanaidu Maradana - A UI Designer & Frontend Developer"
          className="dhanunjayStamp"
        />

        <Fade bottom duration={3000}>
          <div className="experience">
            <Row className="row-cols-2 row-sm-cols-2">
              <Col xs={4}>
                <h6 className="display-2 greenColor">8.5 +</h6>
                <p className="h6">
                  YEARS OF <br />
                  EXPERIENCE
                </p>
              </Col>
              <Col xs={8}>
                <h6 className="display-2 greenColor">90 +</h6>
                <p>
                  PROJECTS COMPLETED ON
                  <br />8 COUNTRIES
                </p>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default Intro;
