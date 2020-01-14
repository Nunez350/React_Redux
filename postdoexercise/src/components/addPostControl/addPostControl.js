import React from 'react';



const addPostControl = (props) => (

    <div className="addPostControl" onClick={props.clicked}>
        <button>
        {props.label}
        </button>
       
      
    </div>

    
);

export default addPostControl;