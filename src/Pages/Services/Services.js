import React from "react";
import "./Services.scss";
import { LiaStreamSolid } from "react-icons/lia";
import { Fade } from "react-reveal";
import { Button, Card, Col, Row } from "react-bootstrap";

const servicesData = [
  {
    id: 1,
    title: "Frontend Content",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    category: "frontend",
  },
  {
    id: 2,
    title: "Graphic Content",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    category: "graphic",
  },
  {
    id: 3,
    title: "UI Content",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    category: "ui_design",
  },
  {
    id: 4,
    title: "Frontend Content",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    category: "frontend",
  },
  {
    id: 5,
    title: "Graphic Content",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    category: "graphic",
  },
  {
    id: 6,
    title: "UI Content",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    category: "ui_design",
  },
  {
    id: 7,
    title: "Frontend Content",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    category: "frontend",
  },
  {
    id: 8,
    title: "Graphic Content",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    category: "graphic",
  },
  {
    id: 9,
    title: "UI Content",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    category: "ui_design",
  },
  {
    id: 10,
    title: "UI Content",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    category: "ui_design",
  },
];
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
          <Fade bottom duration={3000}>
            <Row>
              <Col className="my-3">
                <Button variant="outline-primary" className="mx-2">
                  All
                </Button>
                <Button variant="outline-primary" className="mx-2">
                  Frontend Development
                </Button>
                <Button variant="outline-primary" className="mx-2">
                  Web & Mobile Design
                </Button>
                <Button variant="outline-primary" className="mx-2">
                  Graphic Design
                </Button>
              </Col>
            </Row>
          </Fade>
          <Row className="row-cols-1 row-cols-sm-1 row-cols-md-2">
            {servicesData.map(function (data) {
              return (
                <>
                  {/* <h3>ID Number : {data.id}</h3> */}
                  <Col>
                    <Fade bottom duration={3000}>
                      <Card>
                        <Card.Body>
                          <Card.Title>{data.title}</Card.Title>
                          <Card.Text>
                            <p>{data.description}</p>
                            <span className="badge bg-secondary">
                              {data.category}
                            </span>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Fade>
                  </Col>
                </>
              );
            })}
          </Row>
        </section>
      </section>
    </>
  );
};

export default Services;
