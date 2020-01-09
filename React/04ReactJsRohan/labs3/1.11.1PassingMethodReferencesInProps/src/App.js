import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "rohan", age: 33 },
      { name: "smith", age: 35 },
      { name: "jenna", age: 29 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    console.log("button clicked");
    //This wont work --- this.state.persons[0].name="James";

    //Notics we need not update all the state properties
    this.setState({
      persons: [
        { name: "james", age: 33 },
        { name: "smith", age: 35 },
        { name: "jenna", age: 39 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Hi, I'm a react App</h2>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler}>My Hobbies: Soccer</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;

