import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { actionChannel } from 'redux-saga/effects';

class TodoItem extends Component {
    render(){
        return (
            <li className="todo-item">
                  <ul>{this.props.todos.map(
             todo => <span>
                 {todo.content}
                 <br>
                 </br>
             </span>
         )}
         </ul>
                {/* <span>
                    {this.props.todos.connect}
                </span>
               */}
            </li>
        )
       }
    }
   

    const mapDispatchToProps = dispatch => { 
        return {
        
        }
    }
    const mapStateToProps = (state) => {
        return {
          todos: state.todos,
        }
    };
    
//    const mapStateToProps = (state) => {
//        return {
//          todos: state.todos,
//        }
//    };
   
   
   export default connect( mapStateToProps, mapDispatchToProps)(TodoItem)