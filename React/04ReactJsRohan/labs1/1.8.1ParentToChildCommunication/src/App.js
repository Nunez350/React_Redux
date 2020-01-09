import React, { Component } from 'react';
import './App.css';
import Child from './components/parentToChild/child';

class App extends Component {
  state = {
    title:'placeholder title'
  }

  changeTheWorld = (newTitle) => {
      this.setState({title:newTitle});
  }

  render() {
    return (
      <div className="App">
        
         <Child 
              title={this.state.title}
              doWhatever={()=>{
                this.changeTheWorld('new world!');
               }} />
      {/* <Child title={this.state.title}
                doWhatever={this.changeTheWorld.bind(this,'new world!')}/> */}

      </div>
    );
  }
}

export default App;
