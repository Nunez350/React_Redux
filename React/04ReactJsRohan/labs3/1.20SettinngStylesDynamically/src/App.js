import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

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
    //Create a new copy of the array
    //const persons = this.state.persons.slice();

    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons: persons});
  }
  
  render() {
    const styles = {
      backgroundColor: 'green',
      color: 'white',
      border: '2px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;

    if(this.state.showPersons){
      persons = 
        (<div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={this.deletePersonHandler.bind(this,index)}
            change={(event) => this.nameChangeHandler(event, person.id)}
            name={person.name}
            age={person.age} 
            key={person.id}/>
          })}
        </div>)
      
      styles.backgroundColor = 'salmon';
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

