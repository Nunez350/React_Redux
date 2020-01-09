import React , {useState, useEffect } from 'react';

function App() {
    const [data,setData] =useState([]);

    useEffect(() => {
        console.log("test")
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => setData(data));
    },[]);
    return (
        <div>
            <ul>
                {data.map(el => (
                    <li key={el.id}> {el.title} </li>
                ))}
            </ul>
        </div>
    )
}
export default App;
