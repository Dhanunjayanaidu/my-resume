import React from "react";
import "./Services.scss";
import { LiaStreamSolid } from "react-icons/lia";
import { Fade, Zoom } from "react-reveal";
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
    title: "Brand Identity Design",
    description:
      "Creating logos, color schemes, typography, and overall visual branding for companies or products.",
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
    title: "Print Designs",
    description:
      "Designing brochures, posters, flyers, business cards, magazine layouts, book covers, packaging, and other printed materials.",
    category: "Graphics",
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
    title: "Advertising Designs",
    description:
      "Creating visuals for advertisements, including banner ads, Billbords designs, Paper ads, to promote products, services, or events.",
    category: "Graphics",
  },
  {
    id: 10,
    title: "UI Content",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    category: "ui_design",
  },
  {
    id: 11,
    title: "UI Content",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    category: "ui_design",
  },
  {
    id: 12,
    title: "Packaging Design",
    description:
      "Designing the packaging for products to ensure they are visually appealing and convey the necessary information.",
    category: "Graphics",
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
                    <Zoom duration={1500}>
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
                    </Zoom>
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
