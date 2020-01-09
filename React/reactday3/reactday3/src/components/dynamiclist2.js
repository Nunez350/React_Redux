import React, { Component } from 'react';

class DynamicList2 extends Component {
    setState ={
        string: "hold"
    }


    
render() {
    return(
    <div>
        <input type="text" value={inputValue} onChange={this.onChange} />
    </div>
    )
}

}
export default DynamicList2;