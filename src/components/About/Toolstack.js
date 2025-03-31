import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiCentos,
  SiGithub,
  SiKubuntu,
  SiDocker,
  SiNewrelic,
  SiGrafana,
  SiAmazonec2,
  SiVisualstudiocode,
} from "react-icons/si";


function Toolstack() {
  return (

        <Row style={{ justifyContent: "center", paddingBottom: "25x" }}>

          <Col xs={4} md={2} className="tech-icons">
            <SiKubuntu />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <SiCentos />
          </Col>


          <Col xs={4} md={2} className="tech-icons">
            <SiDocker />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <SiNewrelic />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <SiGithub />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <SiVisualstudiocode />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <SiPostman />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <SiGrafana />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <SiAmazonec2 />
          </Col>

        </Row>

      );
}

export default Toolstack;