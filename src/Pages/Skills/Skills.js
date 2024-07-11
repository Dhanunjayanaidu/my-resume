import React from "react";
import "./Skills.scss";
import { Col, Row } from "react-bootstrap";
import { IoLogoCss3, IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import {
  FaBootstrap,
  FaGitAlt,
  FaSass,
  FaFigma,
  FaGithub,
  FaHtml5,
} from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiCanva,
  SiCoreldraw,
  SiRedux,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { LuShapes } from "react-icons/lu";
import { Fade } from "react-reveal";

const Skills = () => {
  return (
    <>
      <section className="Skills" id="Skills">
        <h6 class="subtitle">
          <LuShapes /> Skills
        </h6>
        <Fade bottom duration={3000}>
          <h3 className="display-4 text-white">
            My <span className="greenColor">Programming</span> Skills
          </h3>
        </Fade>
        <div className="my-4">
          <Row className="skillLogos row-cols-5">
            <Col>
              <Fade bottom duration={3000}>
                <FaHtml5 className="logo" />
              </Fade>
            </Col>
            <Col>
              <Fade bottom duration={3000}>
                <IoLogoCss3 className="logo" />
              </Fade>
            </Col>
            <Col>
              <Fade bottom duration={3000}>
                <FaBootstrap className="logo" />
              </Fade>
            </Col>
            <Col>
              <Fade bottom duration={3000}>
                <RiTailwindCssFill className="logo" />
              </Fade>
            </Col>
            <Col>
              <Fade bottom duration={3000}>
                <IoLogoJavascript className="logo" />
              </Fade>
            </Col>
            <Col>
              <Fade bottom duration={3000}>
                <IoLogoReact className="logo" />
              </Fade>
            </Col>
            <Col>
              <Fade bottom duration={3000}>
                <SiRedux className="logo" />
              </Fade>
            </Col>
            <Col>
              <Fade bottom duration={3000}>
                <FaSass className="logo" />
              </Fade>
            </Col>
            <Col>
              <Fade bottom duration={3000}>
                <FaGitAlt className="logo" />
              </Fade>
            </Col>
            <Col>
              <Fade bottom duration={3000}>
                <FaGithub className="logo" />
              </Fade>
            </Col>
          </Row>
        </div>

        <Fade bottom duration={3000}>
          <h3 className="display-4 text-white">
            My <span className="greenColor">Designing</span> Skills
          </h3>
        </Fade>
        <div className="mb-0 mt-4">
          <Row className="skillLogos row-cols-5">
            <Col>
              <Fade bottom duration={3000}>
                <FaFigma className="logo" />
              </Fade>
            </Col>
            <Col>
              <Fade bottom duration={3000}>
                <SiAdobexd className="logo" />
              </Fade>
            </Col>
            {/* <Col>
              <Fade bottom duration={3000}>
                <SiCanva className="logo" />
              </Fade>
            </Col> */}
            <Col>
              <Fade bottom duration={3000}>
                <SiAdobephotoshop className="logo" />
              </Fade>
            </Col>
            <Col>
              <Fade bottom duration={3000}>
                <SiAdobeillustrator className="logo" />
              </Fade>
            </Col>
            <Col>
              <Fade bottom duration={3000}>
                <SiCoreldraw className="logo" />
              </Fade>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Skills;
