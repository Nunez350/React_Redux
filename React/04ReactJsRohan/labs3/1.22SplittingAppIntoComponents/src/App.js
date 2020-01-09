import React, { Component } from 'react';
import './App.css';
import Persons from './Persons/Persons';
import Cockpit from './Cockpit/Cockpit';


class App extends Component {
  
  state = {
    persons: [
      {id:"1", name: "rohan", age: 33 },
      {id:"2", name: "smith", age: 35 },
      {id:"3", name: "jenna", age: 29 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    })
    
    const person = {
      ...this.state.persons[personIndex]
    }
    
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons: persons});
  }
  
  render() {
    let persons = null;
    if(this.state.showPersons){
      persons = 
        (<Persons 
          persons = {this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          />)
    }

    return (
      <div className="App">
        <Cockpit 
          clicked={this.togglePersonsHandler} 
          showPersons={this.state.showPersons} 
          persons={this.state.persons}/>
        {persons}
      </div>
    );
  }
}

export default App;


