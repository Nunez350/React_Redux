import React, { Component } from 'react';
import './App.css';
import SecondComponent from './SecondComponent/SecondComponent';

class App extends Component {
  render() {
    return ( 
    <SecondComponent name={'rohan'}/>
    ); }
}

export default App;
