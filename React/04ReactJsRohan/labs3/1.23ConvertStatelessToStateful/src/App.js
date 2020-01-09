import React, { Component } from 'react';
import './App.css';
import Persons from './Persons/Persons';
import Cockpit from './Cockpit/Cockpit';

export const AuthContext = React.createContext(false);

class App extends Component {
  
  state = {
    persons: [
      {id:"1", name: "rohan", age: 33 },
      {id:"2", name: "smith", age: 35 },
      {id:"3", name: "jenna", age: 29 }
    ],
    otherState: 'some other value',
    showPersons: false,
    authenticated: false
  }


  UNSAFE_shouldComponentUpdate(nextProps,nextState){
    console.log("[Update App.js] inside shouldcomponentupdate", nextProps, nextState);
    return true;
  }

  UNSAFE_componentWillUpdate(nextProps, nextState){
    console.log("[Update App.js] inside component update", nextProps, nextState);
  }


  UNSAFE_componentDidUpdate(){
      console.log("[Update App.js inside componentdiupdate");
  }
  
  // componentWillMount(){
  //   console.log("[App.js] Inside componentwillmount")
  // }



  // componentDidMount() {
  //   console.log("[App.js] Inside componentdidmount")
  // }


  
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
  
  loginHandler = () => {
    this.setState({authenticated: true})
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
          persons={this.state.persons}
          login={this.loginHandler}/>
          <AuthContext.Provider value ={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
  
      </div>
    );
  }
}

export default App;


