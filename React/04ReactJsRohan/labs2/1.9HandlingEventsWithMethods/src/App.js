import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name:"rohan", age:33},
      {name:"smith", age:35},
      {name:"jenna", age:29}
    ]
  }

  switchNameHandler = () => {
    console.log("button clicked");
  }

  render() {
    return (
      <div className="App">
        <h2>Hi, I'm a react App</h2>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Soccer</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;

