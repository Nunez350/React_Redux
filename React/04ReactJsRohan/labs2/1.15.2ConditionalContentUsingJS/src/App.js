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

  switchNameHandler = (newName) => {
    console.log("button clicked");
    //This wont work --- this.state.persons[0].name="James";

    //Notics we need not update all the state properties
    this.setState({
      persons: [
        { name: newName, age: 33 },
        { name: "smith", age: 35 },
        { name: "jenna", age: 39 }
      ],
      showPersons: false
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "rohan", age: 33 },
        { name: event.target.value, age: 35 },
        { name: "jenna", age: 39 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  
  render() {
    const styles = {
      backgroundColor: 'white',
      border: '2px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;

    if(this.state.showPersons){
      persons = 
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={() => this.switchNameHandler('michael')}
            change={this.nameChangeHandler}>My Hobbies: Soccer</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
      
    }
    return (
      <div className="App">
        <h2>Hi, I'm a react App</h2>
        <p>This is really working</p>
        <button 
          style={styles} 
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;

