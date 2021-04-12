import "./App.css";
// import data from "./Components/Data/data.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Reading from "./Components/Reading";
import Questions from "./Components/Questions";

import "bootstrap/dist/css/bootstrap.min.css";
import "./myStyles.css";

function App() {
  return (
    //why does this only change the little one?
    <Container className="center-vertical-horizontal" fluid>
      <Row className="height500">
        <Col xs={5}>
          <Row>
            <Col>
              <Jumbotron
                className="height500scrollable"
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
              <Jumbotron style={{ backgroundColor: "#949494" }}>
                <Questions />
              </Jumbotron>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
