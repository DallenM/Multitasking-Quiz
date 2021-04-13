import data from "./Data/data.json";
import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Redirect } from "react-router-dom";

function Questions(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = data[0].reading.questions[currentQuestion];
  const answers = questions ? questions.answerOptions : null;
  const nextQuestion = currentQuestion + 1;

  function selectedAnswer(param) {
    if (param.isCorrect) {
      props.setUserScore(props.userScore + 1);
    }
    nextQuestionFunc();
  }

  function nextQuestionFunc() {
    setCurrentQuestion(nextQuestion);
  }

  //if necessary return a redirect (if no next question)
  if (nextQuestion <= answers.length) {
    console.log("next" + nextQuestion);
    console.log("last" + answers.length);
    return (
      <Col>
        <Row md={1} lg={1} className="text-center">
          <h2>{questions.questionText}</h2>
        </Row>
        <Row md={1} lg={1} className="p-5">
          <ListGroup className="height100">
            <ListGroup.Item action onClick={() => selectedAnswer(answers[0])}>
              {answers[0].answerText}
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => selectedAnswer(answers[1])}>
              {answers[1].answerText}
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => selectedAnswer(answers[2])}>
              {answers[2].answerText}
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => selectedAnswer(answers[3])}>
              {answers[3].answerText}
            </ListGroup.Item>
          </ListGroup>
        </Row>
        <Row md={1}>
          <Col className="d-flex justify-content-center">
            <ButtonGroup aria-label="Basic example">
              <Button variant="primary" onClick={nextQuestionFunc}>
                Next
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Col>
    );
  } else {
    return (
      <Row>
        <Redirect to="/QuizScore" />
      </Row>
    );
  }
}
export default Questions;
