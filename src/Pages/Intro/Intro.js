import React from "react";
import "./Intro.scss";
import { IoHomeOutline } from "react-icons/io5";
const Intro = () => {
  return (
    <>
      <section className="Intro" id="intro">
        <h6 type="button" class="btn btn-outline-secondary rounded-pill">
          <IoHomeOutline /> Introduction
        </h6>
        <h5 className="mt-5">WELCOME TO MY WORLD</h5>
        <h3 className="display-2">
          Hi, I am Dhanunjay <br />
          UI Designer & Frontend Developer
        </h3>
        <p className="mt-5">
          I design and code beautifully simple things and i love what i do. Just
          simple like that! I design and code beautifully simple things and i
          love what i do. Just simple like that!
        </p>
      </section>
    </>
  );
};

export default Intro;
