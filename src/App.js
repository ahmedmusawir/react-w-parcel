import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.scss';

const Greeting = styled.h3`
  color: teal;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'This is the face of React in WP5!',
    };
  }

  render() {
    const { name } = this.state;
    const values = { a: 1, b: 2 };
    const newVal = {
      ...values,
      c: 3,
    };
    console.log(newVal);

    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            className="App-logo"
            alt="logo"
          />
          <Greeting className="App-title">{name}</Greeting>
          <i className="fa fa-glass fa-3x" />
        </header>
      </div>
    );
  }
}

export default App;
