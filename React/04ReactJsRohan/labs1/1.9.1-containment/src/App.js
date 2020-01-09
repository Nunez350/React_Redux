import React from 'react';
import './App.css';
import FancyBorder from './FancyBorder/FancyBorder'

function App() {
  return (
    <FancyBorder>
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

export default App;
