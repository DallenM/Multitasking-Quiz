import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Jumbotron } from "react-bootstrap";

function QuizResults(props) {
  if (props.userScore >= 0) {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Jumbotron style={{ alignItems: "center" }}>
              HERE IS THE RESULTS OF THE Quiz You got: {props.userScore}/
              {props.totalQuestions} right.
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  } else {
      return (
          <Container fluid>
              <Row>
                  <Col>
                    <Jumbotron>
                        You haven't taken the quiz yet.  Go to the Quiz Page and take the quiz!
                    </Jumbotron>
                  </Col>
              </Row>
          </Container>
      )
  }
}

export default QuizResults;
