import React, { Component } from 'react';
import './App.css';
import StatelessFunctionalComponent from './components/StatelessFunctionalComponent/StatelessFunctionalComponent';


class App extends Component {
  render() {
    return ( 
        <StatelessFunctionalComponent name={'rohan'}/> 
    ); 
  }
}

export default App;
