import React , {useRef } from 'react';

function App() {
    const inputEl=useRef(null);
    const onButtonClick = () => {
        inputEl.current.focus();
    }
    return (
        <>
        <input ref={inputEl} type="text"/>
        <button onClick={onButtonClick}> focus the input</button>
        </>
    )
    }


export default App;