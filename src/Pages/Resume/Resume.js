import React from "react";
import "./Resume.scss";
import { IoBriefcaseOutline } from "react-icons/io5";
import { Fade } from "react-reveal";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Resume = () => {
  return (
    <>
      <section className="Resume" id="Resume">
        <h6 class="subtitle">
          <IoBriefcaseOutline /> Resume
        </h6>
        <Fade bottom duration={3000}>
          <h3 className="display-4 text-white">
            My Work <span className="greenColor">Experience</span>
          </h3>
        </Fade>

        <VerticalTimeline layout="2-columns">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(50 50 50)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(50 50 50)" }}
            date="Nov 2021 - present - 2 yrs 7 Mos"
            iconStyle={{ background: "rgb(50 50 50)", color: "#fff" }}
            icon={<IoBriefcaseOutline />}
          >
            <h5 className="">
              As a Frontend Developer <br />& UI Designer
            </h5>
            <h6 className="greenColor">Wipro Technologies Ltd.</h6>
            <h6 className="small">Hyderabad, Telangana, India</h6>
            <p>
              Wipro is a leading technology services and consulting company, and
              announced that it has been recognized by Top Employers Institute
              as a 2023 Top Employer in 11 countries...
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(50 50 50)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(50 50 50)" }}
            date="Jan 2021 - Nov 2021 - 9 mos"
            iconStyle={{ background: "rgb(50 50 50)", color: "#fff" }}
            icon={<IoBriefcaseOutline />}
          >
            <h5 className="">As a Frontend Developer (ReactJs)</h5>
            <h6 className="greenColor">Zithara Technologies Pvt. Ltd.</h6>
            <h6 className="small">Hyderabad, Telangana, India</h6>
            <p>
              Zithara is an Indian Fintech company that enables customers to
              live beyond cash, offline retail businesses (#ZiMerchants) to
              effectively retain customers...
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(50 50 50)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(50 50 50)" }}
            date="Jun 2016 - Dec 2020 - 4 yrs 7 Mos"
            iconStyle={{ background: "rgb(50 50 50)", color: "#fff" }}
            icon={<IoBriefcaseOutline />}
          >
            <h5 className="">As a Lead Web Developer</h5>
            <h6 className="greenColor">Vitruvian 3D Solutions Pvt. Ltd.</h6>
            <h6 className="small">Hyderabad, Telangana, India</h6>
            <p>
              Vitruvian 3D Solutions is a Computer Vision Software development
              company with expertise in 3D Imaging & Visualization. We develop
              products that leverage...
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(50 50 50)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(50 50 50)" }}
            date="Jul 2015 - Jun 2016 - 1 year"
            iconStyle={{ background: "rgb(50 50 50)", color: "#fff" }}
            icon={<IoBriefcaseOutline />}
          >
            <h5 className="">As a Web Developer-2</h5>
            <h6 className="greenColor">Vibrant 3D Innovations Pvt. Ltd.</h6>
            <h6 className="small">Hyderabad, Telangana, India</h6>
            <p>
              Vibrant 3D Innovations Pvt Ltd, founded in 2015 is an emerging
              Technology company based out of Hyderabad, India focused on 3D
              Printing, 3D Scanning and 3D Imaging...
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </>
  );
};

export default Resume;
