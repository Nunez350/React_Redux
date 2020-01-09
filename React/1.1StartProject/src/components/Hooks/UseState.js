
import React , {useState, useEffect } from 'react';


function App() {
    const [count,setCount] =useState(0);

    return (
        <div>
            <p> You clicked {count} times </p>
            <button onClick={() => setCount(count +1 )}>
                clickme
            </button>
        </div>
    )
}
export default App;


// function App() {
//     const [data,setData] =useState([]);

//     useEffect(() => {
//         console.log("test")
//     fetch("https://jsonplaceholder.typicode.com/todos")
//         .then(response => response.json())
//         .then(data => setData(data));
//     },[]);
//     return (
//         <div>
//             <ul>
//                 {data.map(el => (
//                     <li key={el.id}> {el.title} </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
// export default App;

