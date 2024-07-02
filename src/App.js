import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Search from "./Components/Search";
import List from "./Components/List";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="my-resume/">Home</Link>
          <Link to="my-resume/courses">Courses</Link>
        </nav>

        <Routes>
          <Route path="my-resume/" element={<Home />} />
          <Route path="my-resume/courses" element={<Courses />}>
            <Route path="search" element={<Search />} />
            <Route path="list" element={<List />} />
          </Route>
        </Routes>
      </Router>
      <header className="App-header d-none">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Dhanunjay Naidu Maradana</h1>
        <p>UI Designer / Frontend Developer</p>

        <Container className="pb-5 pt-3">
          <Row>
            <Col>
              <Card className="shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src="https://plus.unsplash.com/premium_photo-1661678244954-d1d766c00a57?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text className="small">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1544894079-e81a9eb1da8b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text className="small">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src="https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text className="small">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
