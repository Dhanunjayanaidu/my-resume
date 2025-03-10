import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Search from "./Components/Search";
import List from "./Components/List";
// import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   const handleContextmenu = (e) => {
  //     e.preventDefault();
  //   };
  //   document.addEventListener("contextmenu", handleContextmenu);
  //   return function cleanup() {
  //     document.removeEventListener("contextmenu", handleContextmenu);
  //   };
  // }, []);
  return (
    <div className="">
      <Router>
        <Routes>
          <Route exact path="/my-resume" element={<Home />} />
          <Route path="/my-resume/courses" element={<Courses />}>
            <Route path="search" element={<Search />} />
            <Route path="list" element={<List />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
