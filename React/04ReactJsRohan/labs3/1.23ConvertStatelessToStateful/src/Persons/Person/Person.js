import React, { Component } from 'react'
import './Person.css';
import PropTypes from 'prop-types'
import { AuthContext } from '../../App';

class Person extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }

      
    componentDidMount(){
        if(this.props.position ===0){
         this.myRef.current.focus();
        }
       }



    render() {
        return(
           
        <div className="Person">
             <AuthContext.Consumer>
                 {auth => auth? <p> I am authenticated </p>: null}
             </AuthContext.Consumer>
            <div onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</div>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.change} ref= {this.myRef} value={this.props.name} />
        </div>
     
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func

}
Person.defaultProps = {
    name: 'ayushee'
};

export default Person