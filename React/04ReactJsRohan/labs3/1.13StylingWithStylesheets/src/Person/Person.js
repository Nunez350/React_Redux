import React from 'react'
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <div onClick={props.click}>I'm {props.name} and I am {props.age} years old!</div>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>

    )
}

export default person