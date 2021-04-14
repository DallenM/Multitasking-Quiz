import data from "./Data/data.json";
import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Redirect, useParams } from "react-router-dom";

function Questions(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = data[0].reading.questions[currentQuestion];
  const answers = questions ? questions.answerOptions : null;
  const nextQuestion = currentQuestion + 1;
  let updatedScore = props.userScore + 1;

  function selectedAnswer(param) {
    if (param.isCorrect) {
      updatedScore += 1;
      props.setUserScore(updatedScore);
      props.setCorrectQuestions([...props.correctQuestions, questions]);
    }
    nextQuestionFunc();
  }

  function nextQuestionFunc() {
    setCurrentQuestion(nextQuestion);
  }

  //if necessary return a redirect (if no next question)
  if (answers != null) {
    return (
      <Col>
        <Row md={1} lg={1} className="text-center">
          <h2>{questions.questionText}</h2>
        </Row>
        <Row md={1} lg={1} className="p-5">
          <ListGroup className="height100">
            <ListGroup.Item
              id="1"
              action
              onClick={() => selectedAnswer(answers[0])}
            >
              {answers[0].answerText}
            </ListGroup.Item>
            <ListGroup.Item
              id="2"
              action
              onClick={() => selectedAnswer(answers[1])}
            >
              {answers[1].answerText}
            </ListGroup.Item>
            <ListGroup.Item
              id="3"
              action
              onClick={() => selectedAnswer(answers[2])}
            >
              {answers[2].answerText}
            </ListGroup.Item>
            <ListGroup.Item
              id="4"
              action
              onClick={() => selectedAnswer(answers[3])}
            >
              {answers[3].answerText}
            </ListGroup.Item>
          </ListGroup>
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
