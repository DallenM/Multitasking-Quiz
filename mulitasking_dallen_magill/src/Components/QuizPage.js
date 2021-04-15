import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Reading from "./Reading";
import Questions from "./Questions";

import "bootstrap/dist/css/bootstrap.min.css";
import "../myStyles.css";

function QuizPage(props) {
  return (
    <Container className="quizpagepadding">
      <Row>
        <Col className="p-50" xs={5} >
          <Jumbotron className="reading">
            <Reading />
          </Jumbotron>
        </Col>
        <Col>
          <Jumbotron>
            <Questions
              userScore={props.userScore}
              setUserScore={props.setUserScore}
              setCorrectQuestions={props.setCorrectQuestions}
              correctQuestions={props.correctQuestions}
            />
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default QuizPage;
