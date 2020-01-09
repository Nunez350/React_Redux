import React, { Component } from 'react';
import './App.css';
import SecondComponent from './SecondComponent/SecondComponent';
import FirstComponent from './FirstComponent/FirstComponent';

class App extends Component {
  render() {
    return (
      <>
        <FirstComponent name={'Michael'} />
        <SecondComponent name={'rohan'} />
      </>
    );
  }
}

export default App;
