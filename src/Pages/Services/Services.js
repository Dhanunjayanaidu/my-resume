import React from "react";
import "./Services.scss";
import { LiaStreamSolid } from "react-icons/lia";
import { LuCode2 } from "react-icons/lu";
import { Fade, Zoom } from "react-reveal";
import { Button, Card, Col, Row } from "react-bootstrap";

const servicesData = [
  {
    id: 1,
    title: "ReactJs Applications",
    description:
      "React can be used to develop single-page web applications, or server-rendered applications with frameworks like Next.js.",
    category: "frontend",
  },
  {
    id: 2,
    title: "Mobile App Designs",
    description:
      "I can create mobile app designs using Figma, Adobe XD. And mobile UI is the graphical and usually touch-sensitive display.",
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
    title: "Angular Js Applications",
    description:
      "Angular is a TypeScript-based free and open-source single-page web application framework.",
    category: "frontend",
  },
  {
    id: 5,
    title: ".DotNet Applications",
    description:
      "The .NET platform is a free and open-source and the project is mainly developed by Microsoft employees",
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
    title: "Wireframe Designs",
    description:
      "A wireframe is a representation of a web page, app interface, or product layout. It's a low-fidelity, functional sketch.",
    category: "frontend",
  },
  {
    id: 8,
    title: "AntDesign Framework",
    description:
      "Ant Design is a React UI development system that empowers developers to build modern products with flexibility.",
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
    title: "Bootstrap Framework",
    description:
      "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
    category: "ui_design",
  },
  {
    id: 11,
    title: "Tailwind CSS",
    description:
      "Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
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
          <Row className="">
            <Col className="my-3 filterSet">
              <Zoom duration={1500}>
                <Button variant="outline-primary" className="me-2">
                  All
                </Button>
              </Zoom>
              <Zoom duration={1500}>
                <Button variant="outline-primary" className="mx-2">
                  Frontend Development
                </Button>
              </Zoom>
              <Zoom duration={1500}>
                <Button variant="outline-primary" className="mx-2">
                  Web & Mobile Design
                </Button>
              </Zoom>
              <Zoom duration={1500}>
                <Button variant="outline-primary" className="mx-2">
                  Graphic Design
                </Button>
              </Zoom>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-1 row-cols-md-3">
            {servicesData.map(function (data) {
              return (
                <>
                  {/* <h3>ID Number : {data.id}</h3> */}
                  <Col>
                    <Zoom duration={1500}>
                      <Card>
                        <Card.Body>
                          <LuCode2 />
                          <Card.Title>{data.title}</Card.Title>
                          <Card.Text>
                            <p>{data.description}</p>
                            {/* <span className="badge bg-secondary">
                              {data.category}
                            </span> */}
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
