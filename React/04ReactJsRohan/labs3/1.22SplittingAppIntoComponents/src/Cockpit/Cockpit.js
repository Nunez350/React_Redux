import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {
    const styles = {
        backgroundColor: 'green',
        color: 'white',
        border: '2px solid blue',
        padding: '8px',
        cursor: 'pointer'
    }

    if(props.showPersons){
        styles.backgroundColor = 'salmon';
    }
    const classes = [];
    if (props.persons.length <= 2) {
        classes.push('red');
    }
    if (props.persons.length <= 1) {
        classes.push('bold');
    }

    return (
        <div>
            <h2>Hi, I'm a react App</h2>
            <p className={classes.join(' ')}>This is really working</p>
            <button
                style={styles}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;