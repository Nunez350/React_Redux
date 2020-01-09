import React, { Component } from 'react';

class StatelessClassComponent extends Component {
  render() {
    return ( 
        <div>
          Hello, {this.props.name}! I am a FirstComponent. 
        </div>
    ); 
  }
}

export default StatelessClassComponent;
