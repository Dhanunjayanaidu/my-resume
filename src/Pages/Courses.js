import React from "react";
import { Link, Outlet } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <div className="Page" id="Courses">
        <nav>
          <Link to="/my-resume">Home</Link>
          <Link to="/my-resume/courses">Courses</Link>
        </nav>
        <h1 className="display-4">You are in the Courses page!</h1>
        <h3>URL: localhost:3000/courses</h3>
        <div className="courses-nav">
          <Link to="/my-resume/courses/search">Search</Link>
          <Link to="/my-resume/courses/list">List</Link>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Courses;
