import React, {Component} from 'react'
import {connect} from 'react-redux';
import * as ActionTypes from './actions'

class Counter extends Component {
    
    render(){
        return (
            <p>
            Clicked: {this.props.counter} times 
            <button onClick={this.props.onIncrementCounter}>+</button> 
            <button onClick={this.props.onDecrementCounter}>-</button>{' '}
            <button onClick={this.props.onIncrementIfOdd}>Increment if odd</button>{' '}
            <button onClick={this.props.onIncrementAsync}>Increment async</button>
          </p>
        )
    }

} 

const mapStateToProps = (state) => {
    return {
      counter: state.counter
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(ActionTypes.inc()),
        onDecrementCounter: () => dispatch(ActionTypes.dec()),
        onIncrementIfOdd: () => dispatch(ActionTypes.incIfOdd()),
        onIncrementAsync: () => dispatch(ActionTypes.incAsync())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
