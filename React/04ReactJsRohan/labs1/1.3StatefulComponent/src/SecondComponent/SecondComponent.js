import React, { Component } from 'react';

class SecondComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }
    onClick = () => {
        this.setState((prevState, props) => {
            console.log(prevState); 
            console.log(props);
            return {
                counter: prevState.counter + 1
            }
        });
    }

    render() {
        return (
            <div onClick={this.onClick}>
                Hello, {this.props.name}! I am a SecondComponent. <br />
                Toggle is: {this.state.counter}
            </div>);
    }
}

export default SecondComponent;