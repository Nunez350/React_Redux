import React from 'react';
import Child from './child';
//sibling communication
const parent = (props) => {
    return(
        <div>
            <Child {...props}/>
         </div>
    )
}

export default parent;