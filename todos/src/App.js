import React, { Component } from 'react';
import {connect} from 'react-redux'
import ToDoList from './TodoList'
class App extends Component {
    constructor(props) {
      super(props);
      this.text = React.createRef();
    }
  
    handleSubmit() {
      this.props.dispatch({ type: 'ADD_TODO', payload: this.text.current.value })
    }
  
    render() {
      return (
        <div className="app">
          <h1>To Do List App</h1>
          <input ref={this.text}/>
          <button onClick={()=>{this.handleSubmit()}}>Create Todo</button>
          <ToDoList/>
        </div>
      );
    }
  }
  

  
export default connect()(App);
  