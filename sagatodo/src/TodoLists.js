import React, { Component } from 'react';
import { connect } from 'react-redux';


class TodoList extends Component {
 render(){
     return (
         <ul>{this.props.todos.map(
             todo => <span>
                 {todo.content}
             </span>
         )}
         </ul>
     )
    }
 }

const mapStateToProps = (state) => {
    return {
      todos: state.todos,
    }
};


export default connect( mapStateToProps)(TodoLists)