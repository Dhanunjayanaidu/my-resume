import React from "react";
import "./Testimonial.scss";
import { AiOutlineComment } from "react-icons/ai";
import { Fade } from "react-reveal";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt, FaQuoteRight, FaQuoteLeft } from "react-icons/fa";

import sandeepReddy from "../../Images/sandeep.jpeg";
import teja from "../../Images/teja.jpeg";
import murali from "../../Images/murali.jpeg";
import jagadeesh from "../../Images/jagadeesh.jpeg";
import mujeeb from "../../Images/mujeeb.jpeg";

const option = {
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    900: {
      items: 3,
    },
    1170: {
      items: 3,
    },
  },
};

const Testimonial = () => {
  return (
    <>
      <section className="Testimonial" id="Testimonial">
        <h6 class="subtitle">
          <AiOutlineComment /> Testimonial
        </h6>
        <Fade bottom duration={3000}>
          <h3 className="display-4 text-white">
            Trusted by <span className="greenColor">many people</span>
          </h3>
        </Fade>
        <div>
          <OwlCarousel
            className="owl-theme text-center"
            loop
            margin={25}
            nav
            {...option}
          >
            <div class="item">
              <div className="userImage">
                <img src={sandeepReddy} alt="user icon" />
              </div>
              <h5>Sandeep Reddy M</h5>
              <p className="organisation">QUANT LEGALTECH INDIA</p>
              <p className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </p>
              <p className="content">
                <FaQuoteLeft /> Thanks to Dhanunjay, our website's user
                experience has improved dramatically. Their design not only
                looks amazing but has also increased our user engagement and
                satisfaction
                <FaQuoteRight />
              </p>
            </div>
            <div class="item">
              <div className="userImage">
                <img src={teja} alt="user icon" />
              </div>
              <h5>Laxman Teja</h5>
              <p className="organisation">Wipro Technologies</p>
              <p className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </p>
              <p className="content">
                <FaQuoteLeft /> Thanks to Dhanunjay, our website's user
                experience has improved dramatically. Their design not only
                looks amazing but has also increased our user engagement and
                satisfaction
                <FaQuoteRight />
              </p>
            </div>

            <div class="item">
              <div className="userImage">
                <img src={jagadeesh} alt="user icon" />
              </div>
              <h5>Jagadeesh Jagana</h5>
              <p className="organisation">Global Logic india Ltd</p>
              <p className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </p>
              <p className="content">
                <FaQuoteLeft /> Thanks to Dhanunjay, our website's user
                experience has improved dramatically. Their design not only
                looks amazing but has also increased our user engagement and
                satisfaction
                <FaQuoteRight />
              </p>
            </div>
            <div class="item">
              <div className="userImage">
                <img src={murali} alt="user icon" />
              </div>
              <h5>Muralidhar Reddy</h5>
              <p className="organisation">Skillsoft India Ltd.</p>
              <p className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </p>
              <p className="content">
                <FaQuoteLeft /> Thanks to Dhanunjay, our website's user
                experience has improved dramatically. Their design not only
                looks amazing but has also increased our user engagement and
                satisfaction
                <FaQuoteRight />
              </p>
            </div>
            <div class="item">
              <div className="userImage">
                <img src={mujeeb} alt="user icon" />
              </div>
              <h5>Mujeeb Syed</h5>
              <p className="organisation">Legato Health Technologies</p>
              <p className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </p>
              <p className="content">
                <FaQuoteLeft /> Thanks to Dhanunjay, our website's user
                experience has improved dramatically. Their design not only
                looks amazing but has also increased our user engagement and
                satisfaction
                <FaQuoteRight />
              </p>
            </div>
          </OwlCarousel>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
