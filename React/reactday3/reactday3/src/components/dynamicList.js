
import React , {Component } from 'react';

const ListItem = ({ value, onClick }) => (
    <li onClick={onClick}>{value}</li>
  );
  
  const List = ({ items, onItemClick }) => (
    <ul>
      {
        items.map((item, i) => 
        <ListItem 
        key={i} 
        value={item} 
        onClick={onItemClick} />)
      }
    </ul>
  );


  class DynamicList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: '',
        tasks: []
      };
    }
    onClick = () => {
        const { inputValue, tasks } = this.state;
        if (inputValue) {
     
          this.setState({ tasks: [...tasks, inputValue]});
        }
      }
    
      onChange = (event) => this.setState({ 
          inputValue: event.target.value });
    
      render() {
        const { tasks, inputValue } = this.state;
        return (
          <div>
            <input type="text" value={inputValue} onChange={this.onChange} />
            <button onClick={this.onClick}>Add</button>
            <List items={tasks} onItemClick={this.handleItemClick} />
          </div>
        );
      }
    }
    export default DynamicList3;
// import React , {Component } from 'react';


// class DynamicList extends Component {
        
//     state = { tasks: [] };
    

   

//     changeHandler = (event) => {
//         this.setState({
//          tasks :[...tasks]
//         })

//     }

//     render() {
//         return (
//             <>
//             tasks = (
//                 <div>
//                     {/* {this.state.tasks.map(task => {
//                         return 
//                     } ) */}
//                 </div>
//             )

//         <input type="text" ref={this.task}/>
//             <input 
//                 type= "text" 
//                 value={this.state.text} 
//                 onChange={this.changeHandler.bind(this)}></input>

//                 </>
//         )
//     }
// }

// export default DynamicList;