import React from 'react';
import './Input.css'


const Input = (props) => {

    let inputElement = null;
    let inputClasses = ['InputElement'];
    console.log(inputClasses)
    if (props.invalid && props.shouldValidate && props.touched){
        inputClasses.push('Invalid');
        console.log("fire")
    }
    switch (props.elementtype) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementconfig}
                value={props.value} 
                onChange={props.changed}/>;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementconfig}
                value={props.value} 
                onChange={props.changed}/>;
            break;
        case ('select'):
            inputElement = <select
                className={inputClasses.join(' ')}
                {...props.elementconfig}
                value={props.value}
                onChange={props.changed}>
                {props.elementconfig.options.map(option => {
                    return <option key={option.value} value={option.value}>{option.displayValue}</option> 
                })}
                </select>;
            break;
        default:
            inputElement = <input
            className={inputClasses.join(' ')}
                {...props.elementconfig}
                value={props.value} />;
            break;
    }

    return (
        <div className={'Input'}>
            <label className={'Label'}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input;