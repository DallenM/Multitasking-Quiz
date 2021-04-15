import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function IncorrectQuestions(props) {
  function highlightCorrect(param) {
    let newId = param.id;
    if (param.isCorrect) {
      return (
        <ListGroup.Item id={newId} variant="success">
          {param.answerText}
        </ListGroup.Item>
      );
    } else {
      return (
        <ListGroup.Item id={newId} variant="danger">
          {param.answerText}
        </ListGroup.Item>
      );
    }
  }

  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>{props.questions.questionText}</Card.Title>
            <ListGroup className="height100">
              {highlightCorrect(props.questions.answerOptions[0])}
              {highlightCorrect(props.questions.answerOptions[1])}
              {highlightCorrect(props.questions.answerOptions[2])}
              {highlightCorrect(props.questions.answerOptions[3])}
            </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  );
}
export default IncorrectQuestions;
