import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h2>Hi, I'm a react App</h2>
    //   </div>
    // );
    //return React.createElement('div',null,'h1','This is a react App');
    //return React.createElement('div',null,React.createElement('h1',null,"This is a react APP"));
    return React.createElement('div',{className: 'App'},React.createElement('h1',null,"This is a react APP"));
  }
}

export default App;
