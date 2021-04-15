import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Jumbotron } from "react-bootstrap";
import IncorrectQuestions from "./IncorrectQuestions";
import "../myStyles.css";

function QuizResults(props) {
  if (props.userScore >= 0 && props.userScore !== props.totalQuestions) {
    return (
      <Container className="quizresults">
        <Row>
          <Jumbotron className="results text-center">
            <h1>
              <u>YOUR PERFORMANCE</u>
            </h1>
            <br></br>
            <h3>
              You answered {props.userScore}/{props.totalQuestions} or{" "}
              {Math.floor((props.userScore / props.totalQuestions) * 100)}% of the questions
              correct.{" "}
            </h3>
            <br></br>
          </Jumbotron>
        </Row>
        <Row>
          <Jumbotron className="results text-center correctanswers">
            <h2>
              Below are the questions you missed with correct answers
              highlighted in green.
            </h2>
            <Row>
              {props.correctQuestions.map((p) => {
                return (
                  <Col md="3" key={p.id}>
                    <IncorrectQuestions questions={p} />
                  </Col>
                );
              })}
            </Row>
          </Jumbotron>
        </Row>
      </Container>
    );
  } else if (props.userScore === props.totalQuestions){
    return (
      <Container className="quizresults">
        <Row>
          <Jumbotron className="results text-center">
            <h1>
              <u>YOUR PERFORMANCE</u>
            </h1>
            <br></br>
            <h3>
              You answered {props.userScore}/{props.totalQuestions} or{" "}
              {Math.floor((props.userScore / props.totalQuestions) * 100)}% of the questions
              correct.{" "} Good job!
            </h3>
            <br></br>
          </Jumbotron>
        </Row>
      </Container>
    )

  }else{
    return (
      <Container className="gotoquizpage">
        <Jumbotron className="results text-center">
          <h1>
            You haven't taken the quiz yet. Go to the Quiz Page and take the
            quiz!
          </h1>
        </Jumbotron>
      </Container>
    );
  }
}

export default QuizResults;
