import "../Styles/Header.css";
import { Row, Col } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function TitleBlock() {
  return (
    <div id="title-block">
      <div className="title">Reading Quiz</div>
      <div className="subtitle">By Dallen Magill</div>
    </div>
  );
}

function Header() {
  return (
    <header>
      <nav>
        <Row>
          <Col md="10">
            <Breadcrumb style={{ alignContent: "center" }}>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/Quiz">Quiz Page</Breadcrumb.Item>
              <Breadcrumb.Item href="/QuizScore">Quiz Results</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col md="6">
            <TitleBlock />
          </Col>
        </Row>
      </nav>
    </header>
  );
}

export default Header;
