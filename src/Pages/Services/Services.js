import React from "react";
import "./Services.scss";
import { LiaStreamSolid } from "react-icons/lia";
import { Fade } from "react-reveal";
import { Card, Col, Row } from "react-bootstrap";
const Services = () => {
  return (
    <>
      <section className="Services" id="Services">
        <h6 class="subtitle">
          <LiaStreamSolid /> Services
        </h6>

        <Fade bottom duration={3000}>
          <h3 className="mainTitle">
            What <span className="fw-bold greenColor">I do</span>
          </h3>
        </Fade>

        <section>
          <Row className="row-cols-2">
            <Col>
              <Fade bottom duration={3000}>
                <Card>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>

            <Col>
              <Fade bottom duration={3000}>
                <Card>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>
            <Col>
              <Fade bottom duration={3000}>
                <Card>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>
            <Col>
              <Fade bottom duration={3000}>
                <Card>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>
          </Row>
        </section>
      </section>
    </>
  );
};

export default Services;
