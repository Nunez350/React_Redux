import React from 'react'

const person = (props) => {
    return (
        <div>
            <div>I'm {props.name} and I am {props.age} years old!</div>
            <p>{props.children}</p>
        </div>

    )
}

export default person