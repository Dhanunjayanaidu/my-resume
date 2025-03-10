import React from "react";
import "./About.scss";
import { LuUser2 } from "react-icons/lu";
import { Fade } from "react-reveal";
const About = () => {
  return (
    <>
      <section className="AboutMe" id="About">
        <h6 class="subtitle">
          <LuUser2 /> About
        </h6>
        <Fade bottom duration={3000}>
          <h3 className="display-4 text-white">
            Every great product begin with an even{" "}
            <span className="greenColor">better idea</span>
          </h3>
        </Fade>
        <Fade bottom duration={3000}>
          <p>
            I am passionate developer, ui designer and a graphic designer, born
            and brought up in India. Currently, I am working in wipro
            technologies as a frontend developer.
          </p>
          <p className="w-75">
            Since beginning my journey as a designer nearly 8 years ago, I've
            done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. I'm quietly confident, naturally
            curious, and perpetually working on improving designs at a time.
          </p>
        </Fade>
      </section>
    </>
  );
};

export default About;
