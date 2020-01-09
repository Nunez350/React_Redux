import React, {PureComponent } from 'react';
import './App.css';
import Temp from './Temp';

// const Temp = (props) => {
//     console.log('render Temp ');
//     return (<div> {props.val}</div>)
// }


class Anything extends PureComponent {
    state = {
        val: 1
    }


    componentDidMount() {
        setInterval(()=> {
            this.setState(() => {
                return {val : 1}
            });
    }, 2000)
}


shouldComponentUpdate(nextProp, nextState){
    console.log('nextState', nextState)
    console.log('currentState', this.state)
    return ( this.state.val === nextState.val ? false : true)
}

render () {
    return (
        <div className= "Anything">
            <header className>
            <Temp val={this.state.val}/>
            </header>
                 
        </div>
        );
    }
}

export default Anything;