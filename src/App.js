import './App.css';

import { Jumbotron } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import React from 'react'

function App() {
  return (
    <div className="background">
      <Jumbotron className='title' fluid>
        <h1 className='titleContent'>Anthony Resnick</h1>
      </Jumbotron>
    </div>

  );
}

export default App;
