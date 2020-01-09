import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hi, I'm a react App</h2>
        <p>This is really working</p>
        <Person name="rohan" age="33"/>
        <Person name="smith" age="35">My Hobbies: Soccer</Person>
        <Person name="jenna" age="29"/>
      </div>
    );
  }
}

export default App;

