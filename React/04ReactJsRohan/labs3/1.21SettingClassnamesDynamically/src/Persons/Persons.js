import React , {Component } from 'react';
import Person from '../Persons/Person/Person';


class Persons extends Component {
    render() {
        return this.props.persons.map((person, index) => {
        return( <Person
            click = { (index) => this.props.clicked(index)}
            change={(event) => this.props.changed(event,person.id)}
            name={person.name}
            age={person.age}
            key={person.id}
            
            />);
        })
    }
}

export default Persons;

