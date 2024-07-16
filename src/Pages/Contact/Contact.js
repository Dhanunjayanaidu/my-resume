import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import { HiOutlineMailOpen } from "react-icons/hi";
import { Fade } from "react-reveal";
import { Form } from "react-bootstrap";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_abwtzud", "template_t8gtnxm", form.current, {
        publicKey: "kBDF81UqK-LxVpd4p",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setEmail("");
          setName("");
          setText("");
          toast.success("Email has been sent", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          setEmail("");
          setName("");
          setText("");
        }
      );
  };

  return (
    <>
      <ToastContainer />
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
          <Form ref={form} onSubmit={sendEmail}>
            <Fade bottom duration={3000}>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="user_name"
                  placeholder="John Deo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
            </Fade>
            <Fade bottom duration={3000}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="user_email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Fade>
            <Fade bottom duration={3000}>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="Enter your message"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </Form.Group>
            </Fade>
            <Fade bottom duration={3000}>
              <Form.Group className="mb-3" controlId="">
                <input
                  class="btn btn-primary px-5"
                  type="submit"
                  value="Send"
                />
              </Form.Group>
            </Fade>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Contact;
