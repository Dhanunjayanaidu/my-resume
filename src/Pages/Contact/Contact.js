import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import { HiOutlineMailOpen } from "react-icons/hi";
import { Fade } from "react-reveal";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_abwtzud", "template_t8gtnxm", form.current, {
        publicKey: "kBDF81UqK-LxVpd4p",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <section className="Contact" id="Contact">
        <h6 class="subtitle">
          <HiOutlineMailOpen /> Contact
        </h6>
        <Fade bottom duration={3000}>
          <h3 className="display-4 text-white">
            Let's Work <span className="greenColor">Together!</span>
          </h3>
        </Fade>
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
