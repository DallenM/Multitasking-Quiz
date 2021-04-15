import "../Styles/Header.css";
import { Col } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import React from "react";
import "../myStyles.css";

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
    <React.Fragment>
      <Col className="sidemargins15px">
        <Breadcrumb
          style={{ alignContent: "center" }}
          className="toppadding15px centerandfitbreadcrumb"
        >
          <Breadcrumb.Item className="whitetext" href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item className="whitetext" href="/Quiz">Quiz Page</Breadcrumb.Item>
          <Breadcrumb.Item className="whitetext" href="/QuizScore">Quiz Results</Breadcrumb.Item>
        </Breadcrumb>
      </Col>
      <Col className="verticalpadding15px">
        <TitleBlock/>
      </Col>
      <Col></Col>
    </React.Fragment>

    // <Container>
    //   <Col>
    //   </Col>
    //   <Col>
    //     <TitleBlock />
    //   </Col>
    // </Container>
  );
}

export default Header;
