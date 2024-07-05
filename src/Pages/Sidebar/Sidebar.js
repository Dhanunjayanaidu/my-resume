import React from "react";
import "./Sidebar.scss";
import { Button } from "react-bootstrap";
import { LuPhoneCall } from "react-icons/lu";
const dhanunjayaNaiduMaradana =
  "https://avatars.githubusercontent.com/u/63259653?v=4";

const Sidebar = () => {
  return (
    <>
      <section className="Sidebar" id="Sidebar">
        <div className="userImg">
          <img
            src={dhanunjayaNaiduMaradana}
            alt="dhanunjay react profile"
            className="img-fluid"
          />
        </div>
        <h1>Dhanunjaya Naidu Maradana</h1>
        <h2>UI Designer & Frontend Developer</h2>
        <p>Hyderabad, Telangana, India</p>
        <p className="mt-5 small">© 2024 All Rights Reserved</p>
        <div className="d-grid gap-2 mt-3">
          <Button variant="primary rounded-pill">
            <LuPhoneCall /> Call & Hire me
          </Button>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
