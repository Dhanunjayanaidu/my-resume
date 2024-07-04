import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import { Parallax } from "react-parallax";
import "./Home.scss";
import { Fade } from "react-reveal";
import About from "./About/About";
import Intro from "./Intro/Intro";
import Resume from "./Resume/Resume";
import Services from "./Services/Services";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Testimonial from "./Testimonial/Testimonial";
import Contact from "./Contact/Contact";

const image1 =
  "https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8";

const image2 =
  "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68";

const image3 =
  "https://fastly.picsum.photos/id/27/3264/1836.jpg?hmac=p3BVIgKKQpHhfGRRCbsi2MCAzw8mWBCayBsKxxtWO8g";

const Home = () => {
  return (
    <>
      <NavBar />
      <Container fluid>
        <Row>
          <Col sm={12} md={3} lg={3} className="px-0">
            <div className="leftIntro p-5">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </Col>
          <Col sm={12} md={9} lg={9} className="px-0">
            <div className="rightPanel" id="Home">
              <Parallax
                bgImage={image1}
                strength={-200}
                blur={{ min: -30, max: 30 }}
              >
                <div className="p-5" style={{ height: "100vh" }}>
                  <Fade bottom duration={3000}>
                    <Intro />
                  </Fade>
                </div>
              </Parallax>

              <Parallax
                bgImage={image2}
                strength={-200}
                blur={{ min: -30, max: 30 }}
              >
                <div className="p-5" style={{ height: "100vh" }}>
                  <Fade bottom duration={3000}>
                    <About />
                  </Fade>
                </div>
              </Parallax>

              <Parallax
                bgImage={image3}
                strength={-200}
                blur={{ min: -30, max: 30 }}
              >
                <div className="p-5" style={{ height: "100vh" }}>
                  <Fade bottom duration={3000}>
                    <Resume />
                  </Fade>
                </div>
              </Parallax>

              <Parallax
                bgImage={image1}
                strength={-200}
                blur={{ min: -30, max: 30 }}
              >
                <div className="p-5" style={{ height: "100vh" }}>
                  <Fade bottom duration={3000}>
                    <Services />
                  </Fade>
                </div>
              </Parallax>

              <Parallax
                bgImage={image2}
                strength={-200}
                blur={{ min: -30, max: 30 }}
              >
                <div className="p-5" style={{ height: "100vh" }}>
                  <Fade bottom duration={3000}>
                    <Skills />
                  </Fade>
                </div>
              </Parallax>

              <Parallax
                bgImage={image3}
                strength={-200}
                blur={{ min: -30, max: 30 }}
              >
                <div className="p-5" style={{ height: "100vh" }}>
                  <Fade bottom duration={3000}>
                    <Portfolio />
                  </Fade>
                </div>
              </Parallax>

              <Parallax
                bgImage={image1}
                strength={-200}
                blur={{ min: -30, max: 30 }}
              >
                <div className="p-5" style={{ height: "100vh" }}>
                  <Fade bottom duration={3000}>
                    <Testimonial />
                  </Fade>
                </div>
              </Parallax>

              <Parallax
                bgImage={image1}
                strength={-200}
                blur={{ min: -30, max: 30 }}
              >
                <div className="p-5" style={{ height: "100vh" }}>
                  <Fade bottom duration={3000}>
                    <Contact />
                  </Fade>
                </div>
              </Parallax>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
