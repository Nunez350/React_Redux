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
    persons2: [
      { name: "rohan", age: 33 },
      { name:"Solo", age: 35 },
      { name: "jenna", age: 39 }
    ]
  }

  switchNameHandler = (newName, newName2) => {
    console.log("button clicked");
    //This wont work --- this.state.persons[0].name="James";

    //Notics we need not update all the state properties
    this.setState({
      persons: [
        { name: newName, age: 33 },
        { name: newName2, age: 35 },
        { name: "jenna", age: 39 }
      ]
    })
  }

  nameChangeHandler = (event,event2) => {
    this.setState({
      persons: [
        { name: "Han", age: 33 },
        { name: event.target.value, age: 35 },
        { name: "jenna", age: 39 }
      ],persons2: [
        { name: event.target.value, age: 33 },
        { name:"Solo", age: 35 },
        { name: "jenna", age: 39 }
      ]
    })
  }


  render() {
    return (
      <div className="App">
        <h2>Hi, I'm a react App</h2>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler.bind(this,"john", "Luke")}>Switch Name</button>

        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          change={this.nameChangeHandler}>My Hobbies: Soccer</Person>
        <Person 
          name={this.state.persons2[1].name} 
          age={this.state.persons2[1].age}
          click={() => this.switchNameHandler('michael', "royf")}
          change={this.nameChangeHandler}>My Hobbies: Soccer</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}



export default App;


