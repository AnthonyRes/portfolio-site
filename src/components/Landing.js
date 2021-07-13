import { Col, Container, Jumbotron, Row } from 'react-bootstrap';

import React from 'react'

export default function Landing() {

  return (
    <Container fluid>
      <Row className="min-vh-100">
        <Col sm={12} className="d-flex align-items-end justify-content-around" fluid style={{ backgroundColor: '#00004d' }}>
          <Jumbotron fluid className="text-center mb-0 pb-0 text-white" style={{ backgroundColor: '#00004d' }}>
            <div className="display-4"><u>Anthony Resnick</u></div>
          </Jumbotron>
        </Col>
        <Col sm={12} className="text-center text-white d-flex align-items-start justify-content-around" style={{ backgroundColor: '#800000' }}>
          <p className="pt-0">coming soon...</p>
        </Col>
      </Row>
    </Container>
  )
}