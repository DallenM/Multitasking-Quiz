import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { BrowserRouter as Link } from "react-router-dom";

function QuizIntro(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>Instructions</Card.Title>
              <Card.Text>
                This is a quiz to assess your ability to read a paragraph and
                answer questions. When you are ready, press Next and you will be
                taken to the next page to begin the quiz.
              </Card.Text>
              <Button href="/Quiz">Next</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default QuizIntro;
