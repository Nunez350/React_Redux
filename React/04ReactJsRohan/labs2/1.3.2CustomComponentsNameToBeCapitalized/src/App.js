import React, { Component } from 'react';
import './App.css';
import person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hi, I'm a react App</h2>
        <person />
      </div>
    );
  }
}

export default App;

