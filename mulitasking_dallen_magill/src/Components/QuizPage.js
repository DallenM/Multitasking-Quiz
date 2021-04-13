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
    <Container style={{ backgroundColor: "grey" }} fluid>
      <Row>
        <Col xs={5}>
          <Row>
            <Col>
              <Jumbotron
                style={{ backgroundColor: "#949494" }}
              >
                <Reading />
              </Jumbotron>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              <Jumbotron
                style={{ backgroundColor: "#949494" }}
              >
                <Questions userScore={props.userScore} setUserScore={props.setUserScore}/>
              </Jumbotron>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default QuizPage;
