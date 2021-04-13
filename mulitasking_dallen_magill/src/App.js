import "./App.css";
import data from "./Components/Data/data.json";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import QuizPage from "./Components/QuizPage";
import QuizIntro from "./Components/QuizIntro";
import QuizResults from "./Components/QuizResults";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./myStyles.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

function App() {

  const [userScore, setUserScore] = useState(-1);
  const [totalQuestions] = useState(data[0].reading.questions.length);

  return (
    <Router>
      <Container className="p-0 min-vh-100 d-flex flex-column" fluid>
        <Row noGutters className="flex-grow-0 flex-shrink-0 shadow-sm">
          <Col className="px-3 py-2" style={{ backgroundColor: "#146520", color: "black" }}>
            <Header />
          </Col>
        </Row>
        <Row md="auto" className="justify-content-md-center flex-grow-1">
          <Switch>
            <Route path="/QuizScore">
              <QuizResults userScore={userScore} totalQuestions={totalQuestions}/>
            </Route>
            <Route path="/Quiz">
              <QuizPage userScore={userScore} setUserScore={setUserScore}/>
            </Route>
            <Route path="/">
              <QuizIntro/>
            </Route>
          </Switch>
        </Row>
        <Row noGutters className="flex-grow-0 flex-shrink-0">
          <Footer/>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
