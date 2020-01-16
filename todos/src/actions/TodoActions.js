import * as ActionTypes from './ActionTypes';

export const deleteTodo = (id) => {
    return {
      type: ActionTypes.DELETE_TODO,
      id
    }
  }
  
  export const fetchTodos = () => {
    console.log("toto ")
    return { type: ActionTypes.FETCH_TODOS }
  }
  

  export const todoCreated = () => {
    console.log("toto created")
    return { type: ActionTypes.TODO_CREATED}

  }


  export const showCongratulation = () => {
    console.log("SHOW_CONGRATULATION")
    return {type:ActionTypes.SHOW_CONGRATULATION}

  }