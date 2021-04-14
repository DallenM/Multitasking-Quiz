import data from "./Data/data.json";
import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function IncorrectQuestions(props) {
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>{props.questions.questionText}</Card.Title>
          <Card.Text>
            <ListGroup className="height100">
              <ListGroup.Item>
                {props.questions.answerOptions[0].answerText}
              </ListGroup.Item>
              <ListGroup.Item>
                {props.questions.answerOptions[1].answerText}
              </ListGroup.Item>
              <ListGroup.Item>
                {props.questions.answerOptions[2].answerText}
              </ListGroup.Item>
              <ListGroup.Item>
                {props.questions.answerOptions[3].answerText}
              </ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
export default IncorrectQuestions;
