import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Jumbotron } from "react-bootstrap";
import IncorrectQuestions from "./IncorrectQuestions";

function QuizResults(props) {
  if (props.userScore >= 0) {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Jumbotron style={{ alignItems: "center" }}>
              HERE IS THE RESULTS OF THE QUIZ. <br></br> You got:{" "}
              {props.userScore}/{props.totalQuestions} right. <br></br>
              <br></br>
              Here are the questions you got wrong with the correct answer
              highlighted
              {/* {props.correctQuestions} */}
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Jumbotron>
            <Row>
              {props.correctQuestions.map((p) => {
                console.log(p);
                return (
                  <Col className="p-4" md="3" key={p.id}>
                    <IncorrectQuestions questions={p} />
                  </Col>
                );
              })}
            </Row>
            {/* {array} */}
          </Jumbotron>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Jumbotron>
              You haven't taken the quiz yet. Go to the Quiz Page and take the
              quiz!
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default QuizResults;
