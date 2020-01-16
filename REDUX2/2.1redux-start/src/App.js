import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
// import MyComponent from './myComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Counter />
       {/* <MyComponent/> */}
      </div>
    );
  }
}

export default App;
