import React, { Component } from 'react';
import Person from '../Persons/Person/Person'


class Persons extends Component {

  
    componentWillUnmount() {
        console.log("[person.js]did unmount")
      }

      componentWillReceiveProps(nextProps){
        console.log("[Update Person.js Inside conponentwillreceieveprops", nextProps)
      }

      shouldComponentUpdate(nextProps, nextState){

        console.log("[Update Person.js] inside shouldComponentUpdate",nextProps,nextState)
          return nextProps.person !== this.props.persons;
        // return false;
      }

     
    render() {
        return this.props.persons.map((person, index) => {
                return (<Person
                    click={(index) => this.props.clicked(index)}
                    change={(event) => this.props.changed(event, person.id)}
                    name={person.name}
                    position={index}
                    age={person.age}
                    key={person.id}
                   
                    
                />);
            })
    }
}


export default Persons;