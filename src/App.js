import './App.css';

import { Col, Jumbotron, Row } from 'react-bootstrap';

import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import React from 'react'

function App() {
  return (
    <>
      <Row className="background">
        <Col>
          <Jumbotron className='title' fluid>
            <h1 className='titleContent'>Anthony Resnick</h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <div className='tag'>
          <p>coming soon...</p>
        </div>
      </Row>
    </>
  );
}

export default App;
